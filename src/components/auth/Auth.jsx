import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = useSelector((state) => state.token);

  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default memo(Auth);
