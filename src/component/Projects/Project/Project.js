import React from 'react'
import classes from './Project.module.css'
function Project(props) {

    return (
        <div className={classes.Project}>
          <div className={classes.ProjectImage}>
              <img src={props.project.image} alt=""/>
          </div>
          <div className={classes.ProjectDesc}>
              
                  <h3>{props.project.header}</h3>

              <div className={classes.languageTags}>
                  <ul>
                      {
                          props.project.tags.map((tag,index) => (
                            
                              <li key={index}>{tag}</li>
                     
                          ))
                      }
                  </ul>
              </div>
              <div className={classes.descBullets}>
                   <ul>
                       {
                           props.project.desc.map((des,index) => (

                               <li key={index}>{des}</li>
                              
                           ))
                       }
                   </ul>
              </div>
          </div>
          
        </div>
    )
}

export default Project
