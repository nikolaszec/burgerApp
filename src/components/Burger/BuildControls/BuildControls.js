import React from 'react'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
import classes from '../BuildControls/BuildControls.module.css'

const BuildControls = (props) => {

    const controls = [
        {label:'Salad', type:'salad'},
        {label:'Meat', type:'meat'},
        {label:'Bacon', type:'bacon'},
        {label:'Cheese', type:'cheese'}
    ]



    const buildCtr = controls.map((control,i)=>{
        return <BuildControl 
        key={control.type+i}
         label={control.label}
         clickLess = {()=>props.handleLess(control.type)} 
         clickMore = {()=>props.handleMore(control.type)}
         disable={props.disable[control.type]<=0}
         />
    })

    

    return (
        <div className={classes.BuildControls}>
            <p>Price: {props.price.toFixed(2)}</p>
            {buildCtr}
            <button onClick={props.handlerOrder} disabled={props.enableOrder} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
