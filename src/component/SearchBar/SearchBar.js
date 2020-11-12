import React,{useState} from 'react'
import classes from  './SearchBar.module.css'

function SearchBar(props) {
    const [buttonClass,setButtonClass] = useState() 
    return (
        <form onSubmit={props.submitHandler} className={classes.SearchBar}>
           <input 
           className={classes.input}
           onKeyPress={(e)=> (e.key === 'Enter' 
           ? setButtonClass('active') : null)} 
           onKeyUp={(e)=> (e.key === 'Enter' 
           ? setButtonClass('') : null)} 
            type="text" value={props.text} onChange={props.onChange} 
            placeholder="Search for the projects"/>
           <button 
           type="submit"  
           className={buttonClass ? classes.active : ''}
           onClick={props.submitHandler}>
               <i className="fas fa-search"></i>
            </button>
        </form>
    )
}

export default SearchBar
