import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

    const transformedIngredients = Object.keys(props.ingredients).map((ingKey)=>{
        return <li key={ingKey}><span style={{textTransform:"capitalize"}}>{ingKey}</span> {props.ingredients[ingKey]}</li>
    })

    return (
        <React.Fragment>
        <h3>You order very delisious burger with ingredients:</h3> 
            <ul>
               {transformedIngredients}
            </ul>
            <p>Price: {props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType={'Success'} clicked={props.handleContinue}>ORDER</Button>
            <Button btnType={'Danger'} clicked={props.handleCancel}>CANCEL</Button>
        </React.Fragment>
    )
}

export default OrderSummary
