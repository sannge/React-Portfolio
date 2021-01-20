import React from 'react'
import classes from './Skill.module.css'
import GraphqlIcon from '../../assets/svg/graphql.svg';
import Express from '../../assets/svg/express.svg';
import Node from '../../assets/svg/node.svg';
import Git from '../../assets/svg/github-tile.svg';
import Mongo from '../../assets/svg/mongodb-icon.svg';
import Postgres from '../../assets/svg/postgresql-icon.svg';
import Tailwind from '../../assets/svg/tailwindcss-icon.svg';
import MaterialUI from '../../assets/svg/materialui-icon.png';
import GoogleCloud from '../../assets/svg/google_cloud-icon.svg';
import AWS from '../../assets/svg/amazon_aws-icon.svg';

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
        percent: '95%',
        class: 'fab fa-node-js'
    },
    {
        name: 'HTML5',
        percent: '95%',
        class: 'fab fa-html5'
    },
    {
        name: 'CSS3',
        percent: '80%',
        class: 'fab fa-css3-alt'
    },
    {
        name: 'ReactJS',
        percent: '96%',
        class: 'fab fa-react'
    },
    {
        name: 'GraphQL',
        percent: '97%',
        svg: GraphqlIcon
    },
    {
        name: 'ExpressJS',
        percent: '95%',
        svg: Express
    },
    {
        name: 'NodeJS',
        percent: '95%',
        svg: Node
    },
    {
        name: 'Git',
        percent: '99%',
        svg: Git
    },
    {
        name: 'MongoDB',
        percent: '90%',
        svg: Mongo
    },
    {
        name: 'PostgresSQL',
        percent: '96%',
        svg: Postgres
    },
    {
        name: 'TailwindCSS',
        percent: '89%',
        svg: Tailwind
    },
    {
        name: 'MaterialUI',
        percent: '80%',
        svg: MaterialUI
    },
    {
        name: 'Google Cloud Platform',
        percent: '80%',
        svg: GoogleCloud
    },
    {
        name: 'AWS',
        percent: '68%',
        svg: AWS
    }
    

]
function Skill() {
    const skillArr = skills.map((skill,index) =>{
        return (
            
                
               <div key={index} className={classes.skillData}>
                <div className={classes.skillNames}>
                    <i className={[skill.class,classes.skillIcon].join(' ')}></i>
                    {skill.svg && (
                        <img style={{width: '30px', marginLeft: '-12px', marginRight: '6px'}} src={skill.svg} alt=""/>
                    )}
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
