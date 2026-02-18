import React,{useState} from 'react'
import classes from './ChatAuth.module.css'

function ChatAuth(props) {
    const [inputClassColor,setInputClassColor] = useState(classes.white);
    return (
        <div className={props.chatAuthClasses.join(' ')}>
            <div className={classes.topBar}>
                <h3>Chat with San's AI Agent</h3>
                <i className={props.iconClasses.join(' ')} onClick={props.onClick}></i>
            </div>
            <div className={classes.signInText}>
                <p>Sign in to Chat</p>
            </div>
            <div className={classes.description}>
                <p>Ask me anything about San's experience, skills, projects, or background. I'm his AI digital twin!</p>
            </div>
            <div className={classes.signInDiv}>
                <form>
                    <input className={inputClassColor} type="text" value={props.username} required
                    onChange={(e)=>{
                        setInputClassColor(classes.white)
                        props.setUsername(e.target.value)
                    }}
                    placeholder="Your Name"/>
                    <button onClick={props.username ? props.userHandler : ()=> setInputClassColor(classes.invalid)}>Sign in with Google</button>
                </form>
            </div>
        </div>
    )
}

export default ChatAuth
