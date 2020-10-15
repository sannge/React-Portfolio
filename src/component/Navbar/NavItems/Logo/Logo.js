import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.css'
function Logo() {
    return (
        <div className={classes.Logo}>
        <Link className={classes.link} to='/'>
            <h1>San</h1>
        </Link>
        </div>
    )
}

export default Logo
