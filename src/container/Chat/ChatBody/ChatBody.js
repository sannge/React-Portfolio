import React,{useState,useEffect,useRef,useCallback} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import classes from './ChatBody.module.css'
import {auth, firestore} from '../../../Firebase/Firebase'
import firebase from 'firebase/app'

const WELCOME_MESSAGE = { role: 'assistant', content: "Hi! I'm San's AI Agent. Ask me anything about his experience, skills, or projects!" };
const MAX_STORED_MESSAGES = 50;

const TOOL_ICONS = {
    load_topic: 'fas fa-folder-open',
    save_memory: 'fas fa-brain',
    get_memories: 'fas fa-book-open',
    delete_memory: 'fas fa-trash-alt',
    update_profile: 'fas fa-user-edit',
    web_search: 'fas fa-search',
    send_contact_email: 'fas fa-envelope',
};

const TOOL_LABELS = {
    load_topic: 'Looking up details',
    save_memory: 'Saving to memory',
    get_memories: 'Retrieving memories',
    delete_memory: 'Removing memory',
    update_profile: 'Updating profile',
    web_search: 'Searching the web',
    send_contact_email: 'Sending email to San',
};

function ChatBody({onClick,chatBodyClasses,iconClasses,signOutHandler,username}) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [isStreaming, setIsStreaming] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showClearConfirm, setShowClearConfirm] = useState(false);
    const messagesEndRef = useRef(null);
    const abortControllerRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        if(messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, []);

    useEffect(scrollToBottom, [messages, scrollToBottom]);

    // Focus input on mount (chat opened) and when streaming finishes
    useEffect(() => {
        if(!isStreaming && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isStreaming]);

    // Cleanup abort controller on unmount
    useEffect(() => {
        return () => {
            if(abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    // Load chat history from Firestore on mount
    useEffect(() => {
        const uid = auth.currentUser?.uid;
        if(!uid) {
            setIsLoading(false);
            return;
        }
        firestore.collection('chats').doc(uid).get()
            .then(doc => {
                if(doc.exists && doc.data().messages?.length > 0) {
                    setMessages(doc.data().messages);
                }
            })
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    // Save messages to Firestore (strip toolCalls, only persist role+content)
    const saveMessages = useCallback((msgs) => {
        const uid = auth.currentUser?.uid;
        if(!uid) return;
        const toStore = msgs.slice(-MAX_STORED_MESSAGES).map(m => ({
            role: m.role,
            content: m.content,
        }));
        firestore.collection('chats').doc(uid).set({
            messages: toStore,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).catch(() => {});
    }, []);

    const clearChatHandler = () => setShowClearConfirm(true);

    const confirmClearChat = () => {
        if(isStreaming && abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        setMessages([WELCOME_MESSAGE]);
        setMessage('');
        setIsStreaming(false);
        setShowClearConfirm(false);
        const uid = auth.currentUser?.uid;
        if(uid) {
            firestore.collection('chats').doc(uid).delete().catch(() => {});
        }
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const sendMessageHandler = async (e) => {
        e.preventDefault();
        const trimmed = message.trim();
        if(!trimmed || isStreaming) return;

        const userMessage = { role: 'user', content: trimmed };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setMessage('');
        setIsStreaming(true);

        // Add placeholder for AI response
        setMessages(prev => [...prev, { role: 'assistant', content: '', toolCalls: [] }]);

        // Abort any existing request
        if(abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        abortControllerRef.current = new AbortController();

        try {
            const apiBase = process.env.NEXT_PUBLIC_API_URL || '';
            const response = await fetch(`${apiBase}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
                    userId: auth.currentUser ? auth.currentUser.uid : 'anonymous',
                    userEmail: auth.currentUser?.email || '',
                    visitorName: username || 'Visitor',
                }),
                signal: abortControllerRef.current.signal,
            });

            if(response.status === 429) {
                const errorData = await response.json();
                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        role: 'assistant',
                        content: errorData.error || "You've reached the message limit. Please try again later!"
                    };
                    return updated;
                });
                setIsStreaming(false);
                return;
            }

            if(!response.ok) {
                throw new Error('Request failed');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while(true) {
                const { done, value } = await reader.read();
                if(done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for(const line of lines) {
                    if(line.startsWith('data: ')) {
                        try {
                            const data = JSON.parse(line.slice(6));

                            if(data.error) {
                                setMessages(prev => {
                                    const updated = [...prev];
                                    updated[updated.length - 1] = {
                                        role: 'assistant',
                                        content: data.error
                                    };
                                    return updated;
                                });
                                setIsStreaming(false);
                                return;
                            }

                            if(data.done) {
                                setMessages(prev => {
                                    saveMessages(prev);
                                    return prev;
                                });
                                setIsStreaming(false);
                                return;
                            }

                            if(data.token) {
                                setMessages(prev => {
                                    const updated = [...prev];
                                    const last = updated[updated.length - 1];
                                    updated[updated.length - 1] = {
                                        ...last,
                                        content: last.content + data.token
                                    };
                                    return updated;
                                });
                            }

                            if(data.tool_call) {
                                setMessages(prev => {
                                    const updated = [...prev];
                                    const last = updated[updated.length - 1];
                                    updated[updated.length - 1] = {
                                        ...last,
                                        toolCalls: [...(last.toolCalls || []), {
                                            name: data.tool_call.name,
                                            display: data.tool_call.display,
                                            status: 'calling',
                                        }]
                                    };
                                    return updated;
                                });
                            }

                            if(data.tool_result) {
                                setMessages(prev => {
                                    const updated = [...prev];
                                    const last = updated[updated.length - 1];
                                    const toolCalls = [...(last.toolCalls || [])];
                                    if(toolCalls.length > 0) {
                                        const lastTc = toolCalls[toolCalls.length - 1];
                                        toolCalls[toolCalls.length - 1] = {
                                            ...lastTc,
                                            status: 'done',
                                            output: data.tool_result.output,
                                        };
                                    }
                                    updated[updated.length - 1] = { ...last, toolCalls };
                                    return updated;
                                });
                            }
                        } catch(parseErr) {
                            // Skip malformed SSE data
                        }
                    }
                }
            }
            setIsStreaming(false);
        } catch(err) {
            if(err.name !== 'AbortError') {
                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        role: 'assistant',
                        content: "I'm temporarily unavailable. Please try again in a moment!"
                    };
                    return updated;
                });
            }
            setIsStreaming(false);
        }
    }

    const renderToolCalls = (toolCalls) => {
        if(!toolCalls || toolCalls.length === 0) return null;
        return (
            <div className={classes.toolCallsWrap}>
                {toolCalls.map((tc, i) => (
                    <div key={i} className={[classes.toolCall, tc.status === 'done' ? classes.toolCallDone : ''].join(' ')}>
                        <i className={TOOL_ICONS[tc.name] || 'fas fa-cog'}></i>
                        <span>{tc.status === 'calling'
                            ? `${TOOL_LABELS[tc.name] || tc.name}...`
                            : `${TOOL_LABELS[tc.name] || tc.name}`
                        }</span>
                        {tc.status === 'done' && <i className={['fas','fa-check',classes.toolCheck].join(' ')}></i>}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={chatBodyClasses.join(' ')}>
            <div className={classes.topBar}>
                <div className={classes.status}>
                    <h4>Chat with San's AI Agent</h4>
                    <small className={classes.activeWhen}>
                        <i className={['fas','fa-circle',classes.greenCircle].join(' ')}></i>
                        Always Online
                    </small>
                </div>
                <div className={classes.icons}>
                    <i className={[classes.clearChat,'fas','fa-redo-alt'].join(' ')} onClick={clearChatHandler} title="Clear chat"></i>
                    <i className={[classes.signOut,'fas','fa-sign-out-alt'].join(' ')} onClick={signOutHandler}></i>
                    <i className={iconClasses.join(' ')} onClick={onClick}></i>
                </div>
            </div>

            <div className={classes.showcase}>
                {isLoading ? (
                    <div className={classes.blockOther}>
                        <span className={classes.botLabel}>SN</span>
                        <p className={classes.eachMessageOther}>
                            <span className={classes.typingIndicator}>
                                <span className={classes.dot}></span>
                                <span className={classes.dot}></span>
                                <span className={classes.dot}></span>
                            </span>
                        </p>
                    </div>
                ) : messages.map((m, index) => {
                    const isBot = m.role === 'assistant';
                    const messageClassName = isBot ? classes.eachMessageOther : classes.eachMessage;
                    const blockClassName = isBot ? classes.blockOther : classes.block;
                    const isLastAndStreaming = isStreaming && index === messages.length - 1 && isBot;

                    return (
                        <div key={index}>
                            <div className={blockClassName}>
                                {isBot && (
                                    <span className={classes.botLabel}>SN</span>
                                )}
                                <div className={messageClassName}>
                                    {isBot && renderToolCalls(m.toolCalls)}
                                    {isBot ? (
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />,
                                                table: ({node, ...props}) => <div className={classes.tableWrap}><table {...props} /></div>,
                                            }}
                                        >
                                            {m.content}
                                        </ReactMarkdown>
                                    ) : m.content}
                                    {isLastAndStreaming && !m.content && (!m.toolCalls || m.toolCalls.length === 0) && (
                                        <span className={classes.typingIndicator}>
                                            <span className={classes.dot}></span>
                                            <span className={classes.dot}></span>
                                            <span className={classes.dot}></span>
                                        </span>
                                    )}
                                    {isLastAndStreaming && m.content && (
                                        <span className={classes.cursor}>|</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div ref={messagesEndRef}/>
            </div>


            {showClearConfirm && (
                <div className={classes.modalOverlay} onClick={() => setShowClearConfirm(false)}>
                    <div className={classes.modal} onClick={e => e.stopPropagation()}>
                        <p>Clear entire conversation?</p>
                        <div className={classes.modalButtons}>
                            <button className={classes.modalCancel} onClick={() => setShowClearConfirm(false)}>Cancel</button>
                            <button className={classes.modalConfirm} onClick={confirmClearChat}>Clear</button>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={sendMessageHandler} className={classes.typeArea}>
                <input type="text"
                    ref={inputRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isStreaming ? "Waiting for response..." : "Ask about San's experience..."}
                    disabled={isStreaming}
                />
                <button type="submit" className={classes.button} disabled={isStreaming}>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </form>
            <div className={classes.extraArea}>
                <small>Powered by AI &middot; Ask me about San's skills, experience & projects</small>
            </div>
        </div>
    )
}

export default ChatBody
