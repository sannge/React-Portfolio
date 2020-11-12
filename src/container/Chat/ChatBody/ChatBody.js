import React from 'react'
import classes from './ChatBody.module.css'
function ChatBody({onClick,chatBodyClasses,iconClasses}) {
    chatBodyClasses[1] ? console.log(chatBodyClasses[1]) : console.log("Nth")  
    return (
        <div className={chatBodyClasses.join(' ')}>
            <div className={classes.topBar}>
                <div className={classes.status}>
                <h4>Live Chat with San</h4>

                <small className={classes.activeWhen}><i className="fas fa-circle"></i>Last active: 5 hours ago</small>
                </div>
               <i className={iconClasses.join(' ')} onClick={onClick}></i>
            </div>
            <div className={classes.showcase}>

            </div>

            <div className={classes.typeArea}>
           <input type="text" placeholder="Type a message"/>
           <button className={classes.button}><i className="fas fa-paper-plane"></i></button>
           </div>
           <div className={classes.extraArea}>
              <small>Currently Under Development</small>
           </div>
           
        </div>
    )
}

export default ChatBody
