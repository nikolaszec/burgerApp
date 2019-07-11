import React from 'react'
import classes from '../Layout/Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => {

    return (

        <React.Fragment>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
        </React.Fragment>
    )
   
   
    
}


export default Layout