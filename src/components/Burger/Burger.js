import React from 'react'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import classes from '../Burger/Burger.module.css'

const Burger = (props) => {

    // const transformedIngredients = Object.keys(props.ingredients).map((ingName)=>{
    //     console.log(ingName)
    //     return [...Array(props.ingredients[ingName])].map((_,i)=>{
            
    //         return <BurgerIngredient key={i+1} type={ingName}/>
    //     })
    // })
let transformedIngredients = [];
 
for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
        transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);
    }
}

const ingredientsLength = transformedIngredients.reduce((arr,el)=>{
    return arr.concat(el)
},[]).length

if(ingredientsLength === 0){
    transformedIngredients = <p>Please start adding ingredients!</p>
}

    return (
        
            <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
                {transformedIngredients}
                <BurgerIngredient type={'bread-bottom'}/>
            </div>
    
    )
}

export default Burger
