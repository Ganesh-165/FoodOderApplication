import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Url = '/login';

function Login() {
    const {setAuth}  = useAuth();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const onLoginHandler = async (event) => {
        event.preventDefault();
        const response =  await axios.post(Url,{email:email,password:password});
        const  accessToken =  response.data.accessToken;
        const  role =  response.data.role;
        const username = response.data.username;
        if(accessToken){
          setAuth({ email, password, role, accessToken, username });
          setemail('');
          setpassword('');
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(()=>{
            navigate('/user');
          },1500)
        }
        else{
              toast.error(response.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
      }
    return (
      <div className="min-h-screen flex flex-col justify-center p-4 items-center bg-[url('./images/image2.jpg')] bg-no-repeat bg-cover">
        <ToastContainer/>
        <section className="w-full max-w-lg flex flex-col justify-center p-4 min-h-[400px] items-center relative bg-slate-50 rounded-lg animate-container origin-top">
        <h1 className=" text-2xl font-bold">Login</h1>
        <form type="submit" className="flex flex-col justify-evenly pb-4 gap-6 mt-10 min-w-[450px]">
        <input
          type="email"
          placeholder="Email"
          className=" text-sm p-4 rounded-md"
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="PassWord"
          className=" text-sm p-4 rounded-md"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <button className="w-full bg-teal-500 p-4 text-slate-50 rounded-lg" onClick={onLoginHandler}>
          Login
        </button>
        <NavLink to="/register">
              Register Here!
        </NavLink>
      </form>
        </section>
      </div>
    );
  }

export default Login;