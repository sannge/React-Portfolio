import React,{useState} from 'react'
import classes from './Chat.module.css'
import ChatBody from './ChatBody/ChatBody'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../Firebase/Firebase'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ChatAuth from './ChatAuth/ChatAuth'
import firebase from '../../Firebase/Firebase'

function Chat() {
    const [user] = useAuthState(auth);
    // const [user,setUser] = useState(false)
    const [isOn,setIsOn] = useState(false)
    let iconClasses = ['fas','fa-times',classes.closeIcon]
    const [chatBodyClasses,setChatBodyClasses] = useState([classes.ChatBody]);
    const [chatAuthClasses,setChatAuthClasses] = useState([classes.ChatAuth]);
    const [username,setUsername] = useState("");
    
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
      console.log(localStorage.getItem("username"))
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
         <ChatBody username={username} signOutHandler={signOutHandler} iconClasses={iconClasses} chatBodyClasses={chatBodyClasses} onClick={toggleHandler}/>
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
        {isOn ? null : (<div onClick={toggleHandler}className={classes.Chat}>
          <i  className="fas fa-comment-alt"/>
        </div>)}
        </div>
    )
}

export default Chat
