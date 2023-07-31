import React, { useState } from "react";
import { NavLink, Outlet, redirect, useNavigate } from "react-router-dom";
import CartButton from "../mealcomponents/CartButton";
import CartProvider from "../store/CartProvider";
import { LiaGiftSolid } from "react-icons/lia";
import { BsFillCartFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { axiosPrivate } from "../api/axios";
import { useContext } from "react";
import { HiUserAdd } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";
import { CgAdd } from "react-icons/cg";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import AuthContext from "../store/AuthContext";
import useAuth from "../hooks/useAuth";

const Url = "/logout";

const UserNavbar = () => {
  const { setAuth } = useContext(AuthContext);
  const [bool, setBool] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const UserName = auth.username;
  const OpenBar = () => {
    setBool(!bool);
  };
  const onLogoutHandler = async () => {
    setAuth({});
    await axiosPrivate.post(Url, {});
    navigate("/");
  };
  return (
    <CartProvider>
      <Outlet />
      <div
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={OpenBar}
      >
        <button>
          <GiHamburgerMenu className=" px-2 bg-white text-black rounded-md" />
        </button>
      </div>
      <nav
        className={
          bool
            ? "fixed top-0 bottom-0 lg:left-0 p-2 w-80 overflow-y-auto text-center bg-slate-50 animate-navbar origin-left"
            : "fixed top-0 bottom-0 left-[-320px] lg:left-0 p-2 w-80 overflow-y-auto text-center bg-slate-50 animate-navbar origin-left"
        }
      >
        <button
          className="lg:hidden float-right cursor-pointer"
          onClick={OpenBar}
        >
          <IoCloseSharp className="w-5 h-5 bg-white rounded-lg text-lg" />
        </button>
        <div className=" p-2.5 mt-1 flex flex-row items-center">
          <BiSolidUser className=" w-10 h-10 py-2 px-1 bg-slate-50 rounded-full text-lg" />
          <h2 className=" font-bold text-black text-xl w-48 p-3">
            <NavLink to="/user" className="uppercase">
              {UserName}
            </NavLink>
          </h2>
        </div>
        <hr className=" my-2 text-black" />
        {auth.role === "admin" ? (
          <ul className="flex flex-col text-lg">
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/addadmin"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <HiUserAdd />
                </button>
                Add Admin
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/additem"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <CgAdd />
                </button>
                Add Item
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/viewoders"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <LiaGiftSolid />
                </button>
                View Oders
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/viewitems"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <HiViewGrid />
                </button>
                ViewItems
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col text-lg">
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/vegetarian"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <IoFastFoodSharp />
                </button>
                Vegetarian
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/juices"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <MdFastfood />
                </button>
                Juices
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/nonvegetarian"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <PiBowlFoodFill />
                </button>
                Nonvegetarian
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/updatedetails"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <BiEdit />
                </button>
                Edit Profile
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/cart"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <BsFillCartFill />
                </button>
                Cart
                <CartButton />
              </NavLink>
            </li>
            <li className="mt-3 text-black cursor-pointer hover:bg-teal-400 hover:text-white">
              <NavLink
                to="/user/oders"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-teal-500 text-white"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                <button className="flex justify-between p-2 ml-4 rounded-full border mr-6">
                  <LiaGiftSolid />
                </button>
                Oders
              </NavLink>
            </li>
          </ul>
        )}
        <ul>
        <li className="mt-3 text-black flex p-2 flex-row cursor-pointer hover:bg-teal-400 hover:text-white">
              <button
                className="flex justify-around w-1/2 p-2 hover:scale-x-110 transition-all"
                onClick={onLogoutHandler}
              >
                <FiLogOut className="rounded-full text-2xl" />
                Logout
              </button>
        </li>
        </ul>
      </nav>
    </CartProvider>
  );
};

export default UserNavbar;

