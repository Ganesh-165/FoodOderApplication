import React from "react";
import MealItemForm from './MealItemForm';
import { useContext } from "react";
import CartContext from "../store/context";

const MealItem = (props)=>{
    const Context = useContext(CartContext);
    const addAmountHandler = (amount) =>{
        Context.additem({
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return(
        <li className='flex justify-between m-4 pb-4 border-b-4 border-teal-100'>
           <div>
                <h3>{props.name}</h3>
                <div className='italic'>{props.description}</div>
                <div className='text-xl text-black font-bold mt-1'>{props.price}</div>
           </div>
           <MealItemForm onAddAmount={addAmountHandler}/>
        </li>
    )
}
export default MealItem;