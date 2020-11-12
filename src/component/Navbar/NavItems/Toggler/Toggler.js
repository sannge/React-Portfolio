import React from 'react'
import classes from './Toggler.module.css'
function Toggler(props) {
    let CLASS=[props.click ? 'fas fa-times' : 'fas',props.click? classes.active:'','fa-bars',classes.Toggler];
    // let CLASS = props.click ? ['fas','fa-times',classes.Toggler,classes.active] : ['fas','fa-bars',classes.Toggler]
    let color='242424';
    if(props.click){
        color='#f4f4f4';
    }else if(!props.click){
        color='#242424';
    }
    return (
        <>
           <i style={{color: color,transition: 'color 0.5s'}} onClick={props.onClick} className={CLASS.join(' ')}></i> 
        </>
    )
}

export default Toggler
