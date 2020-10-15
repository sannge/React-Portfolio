import React,{useState} from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Toggler from './Toggler/Toggler'
import classes from './NavItems.module.css'
function NavItems() {
    const [click, setClick] = useState(false);
    const clickHandler = () => {
        setClick(
            (prevClick) => !prevClick
        )
    }
    return (
        <div className={classes.NavItems}>
           <Logo onClick={clickHandler}/>
           <Toggler click={click} onClick={clickHandler}/>
           <Menu clickHandler={clickHandler} openMenu={click}/>
            
        </div>
    )
}

export default NavItems
