import React from "react";
import { useContext } from "react";
import CartContext from "../store/context";
import Cart from "../mealcomponents/Cart";
import image from "../images/cartemptyimage.svg";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const Url = '/oders';

const CartItem = () => {
  const Context = useContext(CartContext);
  const order = Context.item.length > 0;
  const totalAmount = Context.totalAmount.toFixed(2);
  const noofitems = Context.item.length;
  const {auth}  = useAuth();
  const cartitem = (
    <ul className=' list-none bg-white'>
      {Context.item.map((item) => (
        <Cart
          key={item.name}
          name={item.name}
          price={item.price}
          amount={item.amount}
        ></Cart>
      ))}
    </ul>
  );
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const onOderHandler  = async(event)=>{
    event.preventDefault();
    const response = await axiosPrivate.post(Url,{email:auth.email,noofitems:noofitems,totalAmount:totalAmount,oders:Context.item})
    Context.removeAll();
    navigate(-1);
  }
  const onCancelHandler = (event)=>{
    event.preventDefault();
    Context.removeAll();
    navigate(-1);
  }
  return (
    <div className="lg:ml-80 ml-20 max-w-xl flex flex-col p-6">
      {cartitem}
      {order && (
        <div className="bg-white p-2 rounded-b-xl">
          <div className='flex justify-between text-2xl font-bold p-2'>
            <span>Total</span>
            <span>{totalAmount}</span>
          </div>
          <div className='text-right'>
            <button className=' bg-teal-500 px-3 py-1 text-xl text-white font-bold rounded-full mr-2' onClick={onOderHandler}>
              Oder
            </button>
            <button className=' bg-teal-500 px-3 py-1 text-xl text-white font-bold rounded-full' onClick={onCancelHandler}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {
        !order && 
        <div className=" flex flex-col justify-center items-center mt-20">
        <h1 className=" text-3xl">No Items</h1>
        <img
          src={image}
          width="700px"
          height="700px"
          className="relative animate-container origin-top"
        ></img>
      </div>
      }
    </div>
  );
};

export default CartItem;
