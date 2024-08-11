import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Main = () => {
  return (
    <div className="px-4 md:px-3 lg:px-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
