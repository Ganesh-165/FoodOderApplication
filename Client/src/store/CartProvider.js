import { useReducer } from 'react';
import CartContext from './context'

const defaultCartState = {
    item:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{
    if(action.type==='ADD'){
        const updateTotalAmount = state.totalAmount+action.item.price*action.item.amount;
        const index = state.item.findIndex(item => item.name === action.item.name);
        const cartitem = state.item[index];
        let updateItem;
        let updatedItems;
        if(cartitem){
            updateItem={
                ...cartitem,
                amount:cartitem.amount+action.item.amount
            }
            updatedItems=[...state.item];
            updatedItems[index]=updateItem;
        }
        else {
            updatedItems = state.item.concat(action.item);
        }
        return{
            item:updatedItems,
            totalAmount:updateTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const index = state.item.findIndex(item => item.name === action.name.name);
        const exististingitem = state.item[index];
        const updateTotalAmount = state.totalAmount - (exististingitem.price*exististingitem.amount);
        let updatedItems = state.item.filter(items => items.name !== action.name.name);
        return{
            item:updatedItems,
            totalAmount:updateTotalAmount
        }
    }

}

const CartProvider = (props)=>{
   const [cartState,dispatchCartState]= useReducer(cartReducer,defaultCartState)
    const addItemHandler = (item)=>{
        dispatchCartState({type:'ADD',item:item});
    }
    const removeItemHandler = (name)=>{
        dispatchCartState({type:'REMOVE',name:name});
    }
    const removeAllHandler = ()=>{
        cartState.item = []
        cartState.totalAmount=0
    }
    const cartContext = {
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        additem:addItemHandler,
        removeItem:removeItemHandler,
        removeAll:removeAllHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}
export default CartProvider;