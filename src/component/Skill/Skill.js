import React from 'react'
import classes from './Skill.module.css'
const skills = [
    {
        name: 'Java',
        percent: '97%',
        class: 'fab fa-java'
    },
    {
        name: 'Python3',
        percent: '90%',
        class: 'fab fa-python'
    },
    {
        name: 'Javascript',
        percent: '75%',
        class: 'fab fa-node-js'
    },
    {
        name: 'HTML5',
        percent: '95%',
        class: 'fab fa-html5'
    },
    {
        name: 'CSS3',
        percent: '75%',
        class: 'fab fa-css3-alt'
    },
    {
        name: 'Databases',
        percent: '80%',
        class: 'fas fa-database'
    },
    {
        name: 'ReactJS',
        percent: '96%',
        class: 'fab fa-react'
    },
    {
        name: 'Swift',
        percent: '45%',
        class: 'fab fa-swift'
    }
    

]
function Skill() {
    const skillArr = skills.map((skill,index) =>{
        return (
            
                
               <div key={index} className={classes.skillData}>
                <div className={classes.skillNames}>
                    <i className={[skill.class,classes.skillIcon].join(' ')}></i>
                    <span className={classes.skillName}>{skill.name}</span>
                </div>
                <div>
                    <span className={classes.skillPercent}>{skill.percent}</span>
                </div>
                <div style={{width: skill.percent}} className={classes.skillBars}>

                </div>
            </div> 
           
        )
    })
    return (
    <div className={classes.Skill}>
        <h2 className={classes.title}>Skills</h2>
            <div className={classes.skillContainer}>
                {skillArr}
                
        </div>
    </div>
    )
}

export default Skill
