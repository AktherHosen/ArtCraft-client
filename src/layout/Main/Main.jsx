import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Handle theme change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // Animation
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="px-4 md:px-3 lg:px-2">
      <Navbar handleToggleTheme={handleToggleTheme} />
      <Outlet />
    </div>
  );
};

export default Main;
