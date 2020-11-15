import React,{useState} from 'react'
import classes from './ChatAuth.module.css'

function ChatAuth(props) {
    const [inputClassColor,setInputClassColor] = useState(classes.white);
    return (
        <div className={props.chatAuthClasses.join(' ')}>
            <div className={classes.topBar}>
                <h3>Welcome to my Live Chat!</h3>
                <i className={props.iconClasses.join(' ')} onClick={props.onClick}></i>
            </div>
            <div className={classes.signInText}>
                <p>Sign in Here</p>
            </div>
            <div className={classes.signInDiv}>
                <form>
                    <input className={inputClassColor} type="text" value={props.username} required 
                    onChange={(e)=>{
                        setInputClassColor(classes.white)
                        props.setUsername(e.target.value)
                    }} 
                    placeholder="Your Name"/>
                    {/* {!props.username ? <p>Please enter your name!</p> : null} */}
                    <button onClick={props.username ? props.userHandler : ()=> setInputClassColor(classes.invalid)}>Sign in with Google</button>
                </form>

            </div>
            
        </div>
    )
}

export default ChatAuth
