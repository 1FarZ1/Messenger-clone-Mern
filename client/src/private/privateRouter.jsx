import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";

export const PrivateRoute = ()=> {
  const { authState } = useContext(AuthContext);
  console.log(authState);
  return authState ? <Outlet /> : <Navigate to="/login" />;
};