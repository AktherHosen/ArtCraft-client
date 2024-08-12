import React, { useState } from "react";
import logo from "../assets/logo.svg";
import userImg from "../assets/user.svg";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, loggedOutUser } = useAuth() || {};
  const handleLogOut = () => {
    loggedOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allCraft" className="hover:underline">
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/addCraft" className="hover:underline">
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink to="/myCraft" className="hover:underline">
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex justify-between items-center my-4 py-2 h-[80px]">
        <div className="flex items-center gap-4">
          <div className="flex gap-x-8 items-center">
            <div className="flex items-center">
              {/* <img src={logo} alt="" className="h-10 w-10" /> */}
              <h1 className="text-3xl font-semibold">
                ArtCraft
                <span className="text-textsecondary font-bold text-4xl">.</span>
              </h1>
            </div>
            <ul className="hidden lg:flex items-center space-x-3 text-md text-gray-500">
              {navLinks}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="bg-red-600 px-3 py-2 rounded-sm  text-white"
                >
                  Logout
                </button>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <button>
              {user ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <img src={userImg} alt="" className="h-10 w-10" />
              )}
            </button>
          </div>

          <div className="lg:hidden cursor-pointer">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <GiHamburgerMenu className="text-3xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 space-y-2 rounded-box mt-3 z-[1] w-52 p-2 shadow"
              >
                {navLinks}
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="bg-red-600 px-3 py-2 rounded-sm  text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
