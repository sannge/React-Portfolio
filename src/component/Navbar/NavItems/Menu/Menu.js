import React from 'react'
import classes from './Menu.module.css'
import {NavLink} from 'react-router-dom'
function Menu(props) {
    let CLASS = [classes.Menu];
    if(props.openMenu){
        CLASS.push(classes.active);
    }
    return (
        <div className={CLASS.join(' ')}>
            <div className={classes.itemsContainer}>
            <ul>
                <li>
                   <NavLink  exact onClick={props.clickHandler} activeClassName={classes.active} className={classes.link} to='/'>
                       <i className={'fas fa-home'}></i>
                       Home
                       </NavLink> 
                </li>
                <li>
                   <NavLink exact onClick={props.clickHandler} activeClassName={classes.active} className={classes.link} to='/experience'>
                   <i className={'fas fa-briefcase'}></i>
                       Experience
                       </NavLink> 
                </li>
                <li>
                   <NavLink exact onClick={props.clickHandler} activeClassName={classes.active} className={classes.link} to='/projects'>
                   <i className={'fas fa-folder-open'}></i>
                       Projects
                       </NavLink> 
                </li>
                <li>
                   <NavLink exact onClick={props.clickHandler} activeClassName={classes.active} className={classes.link}to='/contact'>
                   <i className={'fas fa-address-book'}></i>
                       Contact Info
                       </NavLink> 
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Menu
