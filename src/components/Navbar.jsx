import React, { useState } from "react";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [sideMenuOpen, setsideMenuOpen] = useState(false);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink>Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink>My Art & Craft List</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="flex justify-between px08 items-center py-6">
        <section className="flex items-center gap-4">
          <div
            className="md:hidden"
            onClick={() => setsideMenuOpen(!sideMenuOpen)}
          >
            {sideMenuOpen === true ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </div>
          <div className="flex items-center">
            <img src={logo} alt="" className="h-10 w-10 " />
            <h1 className="text-3xl font-semibold">
              ArtCraft
              <span className="text-textsecondary font-bold text-4xl">.</span>
            </h1>
          </div>
        </section>
        {/* sidebar moble menu  */}
        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-20 right-0 ${
            sideMenuOpen
              ? "translate-x-0 transition-all"
              : "-translate-x-full transition-all"
          } `}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex">
            <ul className="space-y-3">{navLinks}</ul>
          </section>
        </div>
        <section className="flex items-center gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <button>
                <img src={user} alt="" className="h-10 w-10 " />
              </button>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 space-y-2 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
