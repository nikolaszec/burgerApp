import React from 'react'

const Layout = (props) => {

    return (

        <React.Fragment>
        <div>ToolbarComponent,SideDrawerComponent, BackdropComponent</div>
        <main>
            {props.children}
        </main>
        </React.Fragment>
    )
   
   
    
}

export default Layout