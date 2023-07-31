import { useContext } from "react";
import CartContext from '../store/context'


const Cart = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const Context =useContext(CartContext);
  const removeItemHandler = () =>{
      Context.removeItem({
          name:props.name,
      })
    }
  return (
    <li className='flex justify-between items-center m-4 p-4 border-b-4 border-teal-100'>
      <div>
        <h2 className='text-xl font-bold'>{props.name}</h2>
        <div className='w-full flex justify-between items-center mt-4'>
          <span className='text-md font-semibold'>{price}</span>
          <span className='text-md font-medium border border-teal-300 rounded-lg p-1'>x{props.amount}</span>
        </div>
      </div>
      <div className='text-xl'>
        <button onClick={removeItemHandler} className=' w-auto p-2 bg-teal-400 text-white rounded-3xl mt-4'>Remove</button>
      </div>
    </li>
  );
};

export default Cart;
