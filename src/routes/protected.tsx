import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = (props:any) => {
  console.log(props)
  const token = localStorage.getItem("access");
  return <>{token ? <Route {...props} /> : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;