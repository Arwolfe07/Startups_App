import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import CardDetails from "../CardDetails";

const RootLayout = () => {
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
