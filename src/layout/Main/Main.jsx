import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  // Animation
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="px-4 md:px-3 lg:px-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
