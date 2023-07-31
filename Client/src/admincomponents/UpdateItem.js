import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Url = '/admin/singleItem';
const UpdateItem = () => {
  const {state} = useLocation();
  const {itemname} = state;
  const navigate = useNavigate();
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const onAddHandler = async (event) => {
    event.preventDefault();
    const data = await axiosPrivate.patch(Url,{name:itemname,description:description,price:price});
    navigate(-1);
  };
  const onCancelHandler = async(event)=>{
    event.preventDefault();
    navigate(-1);
  }
  useEffect(()=>{
    const getItemDetail =async()=>{
        const data = await axiosPrivate.post(Url,{name:itemname});
        setdescription(data.data.message.description);
        setprice(data.data.message.price);
    }
    getItemDetail();
  },[])
  return (
    <div className="min-h-screen flex flex-col justify-center p-4 items-center">
      <section className="w-full max-w-lg flex flex-col justify-center p-4 min-h-[400px] items-center relative bg-slate-50 rounded-lg animate-container origin-top">
        <h1 className=" text-2xl font-bold">Update {itemname}</h1>
        <form
          type="submit"
          className="flex flex-col justify-evenly pb-4 gap-6 mt-10 min-w-[450px]"
        >
          <textarea
            type="description"
            placeholder="Description"
            className=" text-sm p-4 rounded-md"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <input
            type="number"
            placeholder="Item Price"
            className=" text-sm p-4 rounded-md"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          ></input>
          <button
            className="w-full bg-teal-500 p-4 text-slate-50 rounded-lg"
            onClick={onAddHandler}
          >
            Update
          </button>
          <button
            className="w-full bg-teal-500 p-4 text-slate-50 rounded-lg"
            onClick={onCancelHandler}
          >
            Cancel
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateItem;
