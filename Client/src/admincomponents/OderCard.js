import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const OderCard = (props) => {
    const navigate = useNavigate();
    const date =  new Date(props.date)
    const id= props.id;
    const totalamount = props.totalamount;
    const onViewItemHandler = (event)=>{
        event.preventDefault();
        navigate(`/user/viewoders/items`,{state:{id:id,totalamount:totalamount,email:props.email}});
    }
  return (
    <div className='flex gap-4 w-full justify-between items-center p-6 border-b-4 border-teal-100'>
        <div>
            <h1 className='font-bold text-xl'>Email : {props.email}</h1>
            <h1 className='font-bold text-xl'>Date : {props.date}</h1>
            <h2 className='font-bold text-xl'>No Of Items : {props.noofitems}</h2>
            <h2 className='font-bold text-xl'>Total Amount : {props.totalamount}</h2>
        </div>
        <div>
            <button className='w-auto bg-teal-400 p-2 text-white rounded-full' onClick={onViewItemHandler}>View Items</button>
        </div>
    </div>
  )
}

export default OderCard