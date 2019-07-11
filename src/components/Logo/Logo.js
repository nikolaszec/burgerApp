import React from 'react'
import classes from '../Logo/Logo.module.css'
import burgerLogo from '../../assets/logo/burger-logo.png'

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt='burger-logo.png'/>
        </div>
    )
}

export default Logo
