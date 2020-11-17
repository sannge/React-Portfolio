import React,{useState,useEffect} from 'react'
import classes from './Chat.module.css'
import ChatBody from './ChatBody/ChatBody'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../Firebase/Firebase'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ChatAuth from './ChatAuth/ChatAuth'
import firebase,{firestore} from '../../Firebase/Firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Noti from './Noti'

function Chat() {
    const [user] = useAuthState(auth);
    // const [user,setUser] = useState(false)
    const [isOn,setIsOn] = useState(false)
    let iconClasses = ['fas','fa-times',classes.closeIcon]
    const [chatBodyClasses,setChatBodyClasses] = useState([classes.ChatBody]);
    const [chatAuthClasses,setChatAuthClasses] = useState([classes.ChatAuth]);
    const [username,setUsername] = useState("");
    const [notiCount,setNotiCount] = useState(0);
    //firebase query and data fetching
    const messagesRef = firestore.collection('chats');
    let query = "";
    if(auth.currentUser) {
      query = messagesRef.where("uid","==",auth.currentUser.uid)  
    }
    const [messagesObject,loading,error] = useCollectionData(query,{idField:'id'});
    //..................................

    

    useEffect(() => {
      setNotiCount(0);
      if(messagesObject && messagesObject[0]) {
        messagesObject[0].texts.forEach(text => !text.seen && setNotiCount(prevCount => prevCount+1) )
      }
    }, [messagesObject]);

    useEffect(()=> {
      if(messagesObject && messagesObject[0] && notiCount !== 0) {
      }
    },[messagesObject])

   

    useEffect(() => {
       async function updateNoti(temp) {
        await messagesRef.doc(auth.currentUser.uid).set({
          texts: temp,
          uid: auth.currentUser.uid
      })
      setNotiCount(0);
     }
      if(user && isOn && messagesObject && messagesObject[0]) {
        let tempMessages = [...messagesObject[0].texts]
        let count = 0;
        for(let i =0;i< tempMessages.length;i++) {
          if(!tempMessages[i].seen) {
            tempMessages[i].seen = true;
            count++;
          }
        }
        if(count > 0) {
          updateNoti(tempMessages);
        }
        
        console.log(tempMessages);
      }
    })

    const signInHandler = (e) => {
      //make sure to check the name
      
      e.preventDefault();
      localStorage.setItem("username",username);
      if(username) {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
      
      // setUser(true);
    }

    const signOutHandler = () => {
      localStorage.removeItem("username");
      auth.signOut();
    }
    

    const toggleHandler = () => {
      setIsOn(!isOn);
      if(isOn) {
        setChatBodyClasses([classes.ChatBody])
        setChatAuthClasses([classes.ChatAuth])
      }else{
        setChatBodyClasses([classes.ChatBody,classes.active])
        setChatAuthClasses([classes.ChatAuth,classes.active])
      }
    }

    return (
        <div  className={classes.wholeChat}>
          <CSSTransition
          key={1}
          in={user!==null}
          unmountOnExit
          timeout={100}
          appear={user!==null}
          classNames={classes.fade}>
         <ChatBody messagesRef={messagesRef} messagesObject={messagesObject} loading={loading} error={error} username={username} signOutHandler={signOutHandler} iconClasses={iconClasses} chatBodyClasses={chatBodyClasses} onClick={toggleHandler}/>
         </CSSTransition>
         <CSSTransition
         key={2}
         in={user===null}
         appear={user===null}
         unmountOnExit
         timeout={100}
         classNames={classes.fade}>
           <ChatAuth username={username} setUsername={setUsername} userHandler={signInHandler} onClick={toggleHandler} iconClasses={iconClasses} chatAuthClasses={chatAuthClasses}/>
         </CSSTransition>
         {
         notiCount > 0 && !isOn ? <Noti notiCount={notiCount}/>: null
         }
        {isOn ? null : (<div onClick={toggleHandler}className={classes.Chat}>
          <i  className="fas fa-comment-alt"/>
        </div>)}
        </div>
    )
}

export default Chat
