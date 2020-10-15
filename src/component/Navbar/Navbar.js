import React from 'react'
import classes from './Navbar.module.css'
import NavItems from './NavItems/NavItems'
function Navbar() {
    
    return (
        <div className={classes.Navbar}> 
           <NavItems/>
        </div>
    )
}

export default Navbar
