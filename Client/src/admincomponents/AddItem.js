import React from "react";
import { useState } from "react";
import image from '../images/updateimage.svg'
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Url = '/admin/addItem';
const AddItem = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [itemType, setItemType] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const onAddHandler = async (event) => {
    event.preventDefault();
    const response  = await axiosPrivate.post(Url,{name:name.trim(),description:description,price:price,itemType:itemType});
    setname('');
    setdescription('');
    setprice('');
  };
  return (
    <div className="min-h-screen flex flex-col justify-center p-4 items-center">
      <section className="w-full max-w-lg flex flex-col justify-center p-4 min-h-[400px] items-center relative bg-slate-50 rounded-lg animate-container origin-top">
        <h1 className=" text-2xl font-bold">Add Item</h1>
        <form
          type="submit"
          className="flex flex-col justify-evenly pb-4 gap-6 mt-10 min-w-[450px]"
        >
          <input
            type="name"
            placeholder="Item Name"
            className=" text-sm p-4 rounded-md"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          ></input>
          <textarea
            type="description"
            placeholder="Description"
            className=" text-sm p-4 rounded-md"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          ></textarea>
          <input
            type="number"
            placeholder="Item Price"
            className=" text-sm p-4 rounded-md"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
          ></input>
          <select onChange={(e) => setItemType(e.target.value)} value={itemType} className=" text-sm p-4 rounded-md" required>
            <option default hidden value='Choose Here'>Choose Here </option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='non-vegetarian'>NonVegetarian</option>
            <option value='juice'>Juices</option>
          </select>
          <button
            className="w-full bg-teal-500 p-4 text-slate-50 rounded-lg"
            onClick={onAddHandler}
            disabled={
              name.trim()==='' || price === '' || description.trim()=='' || itemType==='Choose Here'
            }
          >
            Add
          </button>
        </form>
        <img src={image} width="400px" className='hidden xl:block fixed right-0 mr-8 mt-36 animate-jump'/>
      </section>
    </div>
  );
};

export default AddItem;
