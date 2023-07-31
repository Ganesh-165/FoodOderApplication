import React from "react";
import InputForm from "./InputForm";
import {useRef} from 'react'

const MealItemForm = (props)=>{
    const amountInputRef = useRef();
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber =+enteredAmount
        if(enteredAmountNumber<1){
            return;
        }
        props.onAddAmount(enteredAmountNumber);
    }
    return(
        <form className='text-right' onSubmit={onSubmitHandler}>
            <InputForm 
            ref={amountInputRef}
            lable="Amount"
            input={{
                id:'amount',
                min:'1',
                step:'1',
                type:'number',
                defaultValue:'1'
             }}/>
            <button className=" bg-teal-500 text-white px-4 rounded-2xl font-bold border-none">Add</button>
        </form>
    )
}
export default MealItemForm;