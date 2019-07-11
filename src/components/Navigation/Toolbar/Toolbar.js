import React from 'react'
import classes from '../Toolbar/Toolbar.module.css'
import Logo from '../../Logo/Logo'

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo></Logo>
            <nav>
                ...
            </nav>
        </header>
    )
}

export default Toolbar
