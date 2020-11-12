import React,{useState} from 'react'
import classes from './Chat.module.css'
import ChatBody from './ChatBody/ChatBody'
function Chat() {
    const [isOn,setIsOn] = useState(false)
    let iconClasses = ['fas','fa-times',classes.closeIcon]
    const [chatBodyClasses,setChatBodyClasses] = useState([classes.ChatBody]);
    
    const toggleHandler = () => {
      setIsOn(!isOn);
      isOn
      ? setChatBodyClasses([classes.ChatBody])
      : setChatBodyClasses([classes.ChatBody,classes.active])
    }
    return (
        <div  className={classes.wholeChat}>
          <ChatBody iconClasses={iconClasses} chatBodyClasses={chatBodyClasses} onClick={toggleHandler}/>
        {isOn ? null : (<div onClick={toggleHandler}className={classes.Chat}>
          <i  className="fas fa-comment-alt"/>
        </div>)}
        </div>
    )
}

export default Chat
