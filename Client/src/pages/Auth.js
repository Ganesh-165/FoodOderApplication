import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const { auth } = useAuth();
  const token = auth.accessToken;
  console.log(token);
  return (token ? <Outlet /> : <Navigate to="/"></Navigate>);
};

export default Auth;
