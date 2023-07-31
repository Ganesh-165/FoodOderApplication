import React from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Url = '/admin/deletesingleItem';
const ItemCard = (props) => {
  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate();
  const onEditHandler = (event)=>{
    event.preventDefault();
    navigate('/user/viewitems/update',{state:{itemname:props.name}});
  }
  const onDeleteHandler = async(event)=>{
    event.preventDefault();
    props.onDeleteItemHandler();
    console.log(props.name);
    const response = await axiosPrivate.post(Url,{name:props.name});
  }
  return (
    <li className="flex flex-col  max-w-xl m-4 pb-4 border-b-4 border-teal-100">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{props.name}</h3>
          <div className="italic">{props.description}</div>
          <div className="text-xl text-black font-bold mt-1">{props.price}</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button className=" bg-teal-400 w-auto text-white px-2 py-1 font-semibold rounded-full"
          onClick={onEditHandler}>
            Edit
          </button>
          <button className=" bg-teal-400 w-auto text-white font-semibold px-2 py-1 rounded-full"
          onClick={onDeleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemCard;
