import React,{useState,useEffect,useRef} from 'react'
import classes from './ChatBody.module.css'
import {firestore} from '../../../Firebase/Firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import firebase,{auth} from '../../../Firebase/Firebase'
import Loading from '../../../component/Loading/Loading'
import moment from 'moment'
function ChatBody({onClick,chatBodyClasses,iconClasses,signOutHandler,username}) {
    const [message, setMessage] = useState(''); 
    const [messages, setMessages] = useState([]);
    const [Shown,setShown] = useState(null);
    const [hour] = useState(Math.floor(Math.random()*11));
    const messagesEndRef = useRef(null)
    const [count,setCount] = useState(0);
    const didMountRef = useRef(false);   
       
        const messagesRef = firestore.collection('chats');
        
    

        let query = "";
        if(auth.currentUser) {
            query = messagesRef.where("uid","==",auth.currentUser.uid)  
            }

        const [messagesObject,loading,error] = useCollectionData(query,{idField:'id'});
        //when the user not opening the chat && messages come in
        //noti will clear when the user click on the chat button,
        //no noti when chatbody active
        useEffect(() => {
            if(didMountRef.current) {
                if(messagesObject && messagesObject[0] && messagesObject[0].texts && messages.length !== messagesObject[0].texts.length)
            console.log("noti")
            }else {
                didMountRef.current = true;
            }
            
            
        },[messagesObject])

       useEffect(() => {
           async function add() {
            let toSendMessages = []
            toSendMessages.push({
                text: "Hello, Welcome to my Chat!",
                createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
                time: new Date().getTime(),
                san: true,
            })
            await messagesRef.doc(auth.currentUser.uid).set({
                texts: toSendMessages,
                uid: auth.currentUser.uid
            })
           }
           if(!loading && !error && auth.currentUser && messagesObject[0] === undefined) {
               //add doc to database

            add();
           }
           if(messagesObject && messagesObject[0] !== undefined && messagesObject[0].texts) {
               setMessages(messagesObject[0].texts);
           }
       },[messagesObject])
        
       
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom,[messages])
    
    

    const sendMessageHandler = async (e) => {
        e.preventDefault();
        if(message.trim()) {
            let toSendMessages = [...messagesObject[0].texts]
            toSendMessages.push({
                text: message,
                createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
                time: new Date().getTime(),
                san: false,
            })
            
            const {uid} = auth.currentUser;
            await messagesRef.doc(auth.currentUser.uid).set({
                texts: toSendMessages,
                uid
            })
    
            setMessage('');
        }  
    }

    const deleteMessageHandler = async (m) => {
        let messagesList = [...messages];
        let toDeleteMessageIndex=-1;
        for(var i=0;i<messagesList.length;i++) {
            if(messagesList[i].text == m.text && messagesList[i].createdAt == m.createdAt && messagesList[i].san == m.san) {
                toDeleteMessageIndex = i;
                
            }
        }
        messagesList.splice(toDeleteMessageIndex,1);
        await messagesRef.doc(auth.currentUser.uid).set({
            texts: messagesList,
            uid: auth.currentUser.uid
        })


        
    }

    return (
        <div className={chatBodyClasses.join(' ')}>
            <div className={classes.topBar}>
                <div className={classes.status}>
                <h4>Live Chat with San</h4>

                {!messages.some((m) => { return (((new Date().getTime() - m.time)/1000)/60) < 60 && m.san})  ? <small className={classes.activeWhen}><i className="fas fa-circle"></i>Last active: {hour===0 ? 1 : hour} hours ago</small> : <small className={classes.activeWhen}><i className={['fas','fa-circle',classes.greenCircle].join(' ')}></i>Active Now</small>}
                </div>
                <div className={classes.icons}>
                <i className={[classes.signOut,'fas','fa-sign-out-alt'].join(' ')} onClick={signOutHandler}></i>
               <i className={iconClasses.join(' ')} onClick={onClick}></i>
               </div>
            </div>
            
            <div className={classes.showcase}>


                {
                    
                    loading ? <Loading/> 
                    : error ? <div className={classes.error}><div className={classes.errorMessageContainer}><p>An Error Occured. Please Try Again!</p></div></div> 
                    : (
                        auth.currentUser && auth.currentUser.uid && messages && (
                            messages.map((m,index) =>  {
                                const messageClassName = m.san ? classes.eachMessageOther : classes.eachMessage;
                                const blockClassName = m.san ? classes.blockOther : classes.block;
                                return (
                                    <div key={index}>
                                    {(index === 0 ||(((m.time - messages[index-1].time)/1000)/60) > 60) && <p className={classes.time}>{m.createdAt}</p>}
                                    <div className={blockClassName} onMouseLeave={()=> setShown(null)}>
                                    <p className={messageClassName} onClick={()=>!Shown ? setShown(index+1) : setShown(null)}>{m.text}</p>
                                    { !m.san && Shown && Shown === index+1 && <button className={classes.textDeleteButton} onClick={() => deleteMessageHandler(m)} ><i className={"fas fa-trash"}></i></button>}
                                    </div>
                                    </div>
                                )
                            })
                        )
                    )
                }
            
               <div ref={messagesEndRef}/>

            </div>
            

            <form onSubmit={sendMessageHandler} className={classes.typeArea}>
           <input type="text" 
           value={message}
           onChange={(e)=> setMessage(e.target.value)} 
           placeholder="Type a message"/>
           <button onClick={sendMessageHandler} className={classes.button}><i className="fas fa-paper-plane"></i></button>
           </form>
           <div className={classes.extraArea}>
              <small>Chat is Live Now!<br/>Adding More Features!</small>
           </div>
           
        </div>
    )
}

export default ChatBody
