import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../../src/components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';



const INGREDIENT_PRICE = {
    salad:0.3,
    meat:1.3,
    bacon:0.8,
    cheese:0.5
}

class BurgerBuilder extends Component {

state = {
    ingredients:{
        salad:0,
        meat:0,
        cheese:0,
        bacon:0
    },
    totalPrice : 0,
    disableOrder:true,
    clickOrder:false
}

handleOrderClick = ()=>{
    this.setState({
        clickOrder:true
    })

}

cancelOrderClick = ()=>{
    this.setState({
        clickOrder:false
    })
}

continueOrderClick = () => {
    alert('Ordered')
}

shouldOrder = (ingredients)=>{

   
   this.setState({
       disableOrder:Object.values(ingredients).every((val)=>val<=0)
   })
}

handleMoreIngredints = (type) =>{
    //update Ingredients

    

    const updateIngr = {
        ...this.state.ingredients
    }
    updateIngr[type] +=1

    let oldPrice = this.state.totalPrice
    const updatePrice = oldPrice+= INGREDIENT_PRICE[type]


    this.setState(({
        ingredients:updateIngr,
        totalPrice:updatePrice
        
    }))

    this.shouldOrder(updateIngr)
    
    
    
}

handleLessIngredients = (type) => {
     //update Ingredients

     if(this.state.ingredients[type]===0){
        return 
    }

     const updateIngr = {
        ...this.state.ingredients
    }
    updateIngr[type] -=1
    

    //Update price
    let oldPrice = this.state.totalPrice
    
    const updatePrice = oldPrice-= INGREDIENT_PRICE[type]


    this.setState(({
        ingredients:updateIngr,
        totalPrice:updatePrice
        
    }))

    this.shouldOrder(updateIngr)
    
}




    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        
        return(
            <React.Fragment>
            <Modal show={this.state.clickOrder} closeModal={this.cancelOrderClick}>
            <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} handleCancel={this.cancelOrderClick} handleContinue={this.continueOrderClick}/>
            </Modal>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls handlerOrder={this.handleOrderClick} enableOrder={this.state.disableOrder} price={this.state.totalPrice} disable={disableInfo} handleLess={this.handleLessIngredients} handleMore = {this.handleMoreIngredints}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder