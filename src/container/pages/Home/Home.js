import React from 'react'
import classes from './Home.module.css'
import profileImage from '../../../assets/mywebsiteprofile2.jpg'
import Button from '../../../component/Button/Button'
import Aboutme from '../../../component/Aboutme/Aboutme'
import Skill from '../../../component/Skill/Skill'
import Resume from '../../../assets/project-images/MyResume.pdf'

function Home() {

    return (
        <>
        <div className={classes.Home}>
            <div className={classes.Header}>
            <h1>Hello, <br/> I am <span style={ 
            {color: 'rgb(42, 127, 191)', 
            fontWeight: 'bold',
            fontSize: '35px',
            letterSpacing: '2px'
            
            }}
            className={classes.name}>
                 San Nge 
             </span><br/> Software Engineer</h1>
            </div>
             <div className={classes.Button}>
        
                <a href={Resume} download="San Nge's Resume.pdf" target="_blank">
                    <Button>
                    <i className="fas fa-download" style={{marginRight:'3px'}}/>Resume
                    </Button>
                </a>

             </div>
             <div className={classes.social}>
                 <a href="https://www.facebook.com/sam.nge.507">
                     <i className='fab fa-facebook'></i>
                 </a>
                 <a href="https://www.linkedin.com/in/san-nge-695b16180">
                     <i className='fab fa-linkedin'></i>
                 </a>
                 <a href="https://www.github.com/sannge">
                     <i className='fab fa-github'></i>
                 </a>
             </div>
            <div className={classes.Image}>
            <img src={profileImage} alt=""/>
            </div>
        </div>
        <div className={classes.stats}>
        <div className={classes.Aboutme}>
        <Aboutme/>
        </div>
        <div className={classes.Skill}>
            <Skill/>
        </div>
        </div>
    </>
    )
}

export default Home
