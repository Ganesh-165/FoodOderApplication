import React, { Fragment ,useContext} from "react";
import CartContext from '../store/context'

const CartButton = (props) =>{
    const Context = useContext(CartContext);
    const numberofitems= Context.item.reduce((currnum,item)=>{
        return currnum+item.amount;
    },0)
    return(
        <Fragment>
            <button className='rounded-full w-12 bg-teal-300 ml-10' onClick={props.onClick}>
                <span>{numberofitems}</span>
            </button>
        </Fragment>
    )
}
export default CartButton;