import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";

export const PrivateRoute = ()=> {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};