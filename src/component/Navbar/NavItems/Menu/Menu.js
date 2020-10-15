import React from 'react'
import classes from './Menu.module.css'
import {Link} from 'react-router-dom'
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
                   <Link  onClick={props.clickHandler} className={[classes.link]} to='/'>
                       <i className={'fas fa-home'}></i>
                       Home
                       </Link> 
                </li>
                <li>
                   <Link onClick={props.clickHandler} className={classes.link} to='/experience'>
                   <i className={'fas fa-briefcase'}></i>
                       Experience
                       </Link> 
                </li>
                <li>
                   <Link onClick={props.clickHandler} className={classes.link} to='/projects'>
                   <i className={'fas fa-folder-open'}></i>
                       Projects
                       </Link> 
                </li>
                <li>
                   <Link onClick={props.clickHandler} className={classes.link}to='/contact'>
                   <i className={'fas fa-address-book'}></i>
                       Contact
                       </Link> 
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Menu
