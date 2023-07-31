import React from 'react'
import { useState ,useRef,useEffect } from 'react';
import image from '../images/addadmin.svg';
import useAxiosPrivate from '../hooks/useAxiosPrivate';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,10}$/;
const Url = '/admin/addadmin';

const AddAdmin = () => {
  const userRef = useRef();
  const errRef = useRef();
  const axiosPrivate = useAxiosPrivate();

  const [username, setusername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setpassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confPassword, setConfPassword] = useState("");
  const [validConfPassWord, setValidConfPassword] = useState(false);
  const [confPasswordFocus, setConfPasswordFocus] = useState(false);

  const [address, setAddress] = useState("");

  const [phoneno, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidConfPassword(password === confPassword);
  }, [password, confPassword]);

  useEffect(() => {
    setMessage("");
  }, [username, password, confPassword]);

  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    const response = await axiosPrivate.post(Url,{email:email,username:username,password:password,address:address,phoneno:phoneno,userType:'admin'});
    if(response.message === 'Email Already Registered'){
      setError(response.message);
      setTimeout(()=>setError(''),3000);
    }else{
      setError(response.message);
      setTimeout(()=>setError(''),3000);
    }
  }
  return (
    <div className="min-h-screen flex flex-row justify-center p-4 gap-16 items-center">
      <section className="w-full max-w-lg flex flex-col justify-center relative p-4 min-h-[400px] mt-20 items-center bg-slate-50 rounded-lg animate-container origin-top">
        <h1 className=" text-2xl font-bold">Add Admin</h1>
        <p>{message}</p>
        <form className="flex flex-col justify-evenly flex-grow pb-4 gap-4 mt-10 min-w-[300px] sm:min-w-[450px]">
        <input
            type="email"
            placeholder="Email"
            ref={userRef}
            className=" text-sm p-4 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            type="text"
            placeholder="UserName"
            className="text-sm p-4 rounded-md"
            autoComplete="off"
            aria-invalid={validName ? false : true}
            onChange={(e) => setusername(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            required
          ></input>
          <p
            className={
              userFocus && username && !validName
                ? "text-sm rounded-md p-1 relative bg-teal-400 text-slate-50"
                : "left-[-9999px] absolute"
            }
          >
            4 to 24 characters. Must begin with a letter. Letters, numbers,
            underscores, hyphens allowed.
          </p>
          <input
            type="password"
            placeholder="Password"
            className=" text-sm p-4 rounded-md"
            aria-invalid={validPassword ? false : true}
            onChange={(e) => setpassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            value={password}
            required
          ></input>
          <p
            className={
              passwordFocus && !validPassword
                ? "text-sm rounded-md p-1 relative bg-teal-400 text-slate-50"
                : "left-[-9999px] absolute"
            }
          >
            6 to 10 characters. Must include uppercase and lowercase letters, a
            number and a special character. Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <input
            type="password"
            placeholder="ConformPassWord"
            className=" text-sm p-4 rounded-md"
            value={confPassword}
            aria-invalid={validConfPassWord ? false : true}
            onChange={(e) => setConfPassword(e.target.value)}
            onFocus={() => setConfPasswordFocus(true)}
            onBlur={() => setConfPasswordFocus(false)}
            required
          ></input>
          <p
            className={
              confPasswordFocus && !validConfPassWord
                ? "text-sm rounded-md p-1 relative bg-teal-400 text-slate-50"
                : "left-[-9999px] absolute"
            }
          >
            Must match the first password input field.
          </p>
          <input
            type="text"
            placeholder="Address"
            className=" text-sm p-4 rounded-md"
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
          <input
            type="text"
            placeholder="MobileNumber"
            className=" text-sm p-4 rounded-md"
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          ></input>
          <button
            disabled={
              !validName || !validPassword || !validConfPassWord ? true : false
            }
            className="w-full bg-teal-500 p-4 text-slate-50 rounded-lg"
            onClick={onSubmitHandler}
          >
            Add
          </button>
        </form>
      </section>
      <img src={image} width="400px" className='hidden xl:block fixed right-0 mr-8 mt-36 animate-jump'/>
    </div>
  )
}

export default AddAdmin