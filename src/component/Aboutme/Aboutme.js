import React from 'react'
import classes from './Aboutme.module.css'
import AboutmeProfile from '../../assets/AboutmeProfile.jpg'
function Aboutme() {
    return (
        <div className={classes.AboutmeContainer}>
            <h2>About</h2>
            <div className={classes.AboutmeMainAndProfile}>
                {/* <div className={classes.AboutmeImage}>
                    <img src={AboutmeProfile} alt="profile"/>
                </div> */}
            <div className={classes.AboutmeMain}>
            <p>I am a proactive student (BS in Computer Science)
                currently attending Pacific Lutheran University graduating 
                on December 2020. I spend most of my time learning new topics 
                on web development and building projects with them. I am comforable 
                building MERN stack web applications and familiar building chat applications,
                e-commerce websites, and more. My hobbies are Coding, Hiking, and Cooking.
            </p>
            </div>
            </div>
            
        </div>
        
    )
}

export default Aboutme
