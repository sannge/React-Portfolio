import React from 'react'
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import classes from './Layout.module.css'
function Layout(props) {
    return (
        <>
        <div className={classes.Layout}>
        <Navbar/>
        <div className={classes.pages}>
        {props.children}
        </div>
        </div>
        <Footer/>
            
        </>
    )
}

export default Layout
