import React,{useState,useEffect} from 'react'
import classes from './Chat.module.css'
import ChatBody from './ChatBody/ChatBody'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../Firebase/Firebase'
import {CSSTransition} from 'react-transition-group'
import ChatAuth from './ChatAuth/ChatAuth'
import firebase from '../../Firebase/Firebase'

function Chat() {
    const [user] = useAuthState(auth);
    const [isOn,setIsOn] = useState(false)
    let iconClasses = ['fas','fa-times',classes.closeIcon]
    const [chatBodyClasses,setChatBodyClasses] = useState([classes.ChatBody]);
    const [chatAuthClasses,setChatAuthClasses] = useState([classes.ChatAuth]);
    const [username,setUsername] = useState("");

    useEffect(() => {
      const stored = localStorage.getItem("username");
      if(stored) setUsername(stored);
    }, []);

    const signInHandler = (e) => {
      e.preventDefault();
      localStorage.setItem("username",username);
      if(username) {
        const ua = navigator.userAgent || '';
        if(/FBAN|FBAV|Instagram|Messenger|Line|Twitter|MicroMessenger|Snapchat/i.test(ua)) {
          alert('Please open this site in Safari or Chrome to sign in. Embedded browsers (Messenger, Facebook, etc.) block Google sign-in.');
          return;
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
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
        <div className={classes.wholeChat}>
          <CSSTransition
          key={1}
          in={user!==null}
          unmountOnExit
          timeout={100}
          appear={user!==null}
          classNames={classes.fade}>
         <ChatBody
           username={username}
           signOutHandler={signOutHandler}
           iconClasses={iconClasses}
           chatBodyClasses={chatBodyClasses}
           onClick={toggleHandler}
         />
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
        {isOn ? null : (
          <div onClick={toggleHandler} className={classes.Chat}>
            <span className={classes.pulseRing}></span>
            <i className={['fas','fa-magic',classes.wandIcon].join(' ')}></i>
            <span className={[classes.sparkleDot, classes.sparkleDot1].join(' ')}>&#10022;</span>
            <span className={[classes.sparkleDot, classes.sparkleDot2].join(' ')}>&#10022;</span>
            <span className={[classes.sparkleDot, classes.sparkleDot3].join(' ')}>&#10024;</span>
          </div>
        )}
        </div>
    )
}

export default Chat
