import React from 'react'
import classes from '../Backdrop/Backdrop.module.css'

const Backdrop = (props) => {
  
    return (
    
        props.show?<div onClick={props.close} className={classes.Backdrop}></div>:null
        
    )
}

export default Backdrop
