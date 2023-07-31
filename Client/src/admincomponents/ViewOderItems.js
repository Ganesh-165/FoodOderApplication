import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const Url = "/admin/getSingleOder";
const ViewOderItems = () => {
  const {auth} = useAuth();
  const { state } = useLocation();
  const { id } = state;
  const { totalamount } = state;
  const { email } = state;
  const axiosPrivate = useAxiosPrivate();
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getOderitems = async () => {
      const response = await axiosPrivate.post(Url, { id: id, email: email });
      setAddress(response.data.address);
      setMobile(response.data.mobileno);
      setItems(response.data.oderitems);
    };
    getOderitems();
  }, []);

  const onDeleveryHandler = async (event) => {
    event.preventDefault();
    const response = await axiosPrivate.patch(Url, { id: id });
    navigate(-1);
  };
  return (
    <section className="lg:ml-80 ml-20 max-w-2xl flex flex-col p-4 rounded">
      <div className="flex flex-col bg-white rounded-3xl p-4">
        <h1 className="font-bold text-2xl">Email : {email}</h1>
        <h1 className="font-bold text-2xl">Address : {address}</h1>
        <h1 className="font-bold text-2xl">Mobile : {mobile}</h1>
        <div className="p-3">
          <h1 className="font-bold text-xl">Items</h1>
          <ul className="p-2 flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.oderid}>
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <div className="text-lg text-black font-bold mt-1">
                    {item.amount}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-bold text-2xl">Total Amount: {totalamount}</h1>
      </div>
      <div className="flex flex-row justify-between">
        <NavLink
          to=".."
          className="mt-3  bg-teal-400 w-[90px] text-xl text-white p-2 rounded-full"
        >
          GoBack
        </NavLink>
        {
          auth.role === 'admin' && 
          <button
          className=" mt-3  bg-teal-400 w-[150px] text-xl text-white p-2 rounded-full"
          onClick={onDeleveryHandler}
        >
          Delevered
        </button>
        }
      </div>
    </section>
  );
};

export default ViewOderItems;
