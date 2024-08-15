import React from "react";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-opacity-80 mt-10 ">
      <footer class="px-4 lg:px-36 text-white py-10  ">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div class=" mb-8 lg:mb-0 space-y-3">
            <h1 className="text-3xl font-semibold">
              ArtCraft {}
              <span className="text-textsecondary font-bold text-4xl">.</span>
            </h1>
            <p class="text-gray-400 mb-4 text-sm">
              Discover a world of artistic expression with unique handcrafted
              items, personalized designs, and inspiring artworks.
            </p>
            <ul class="text-gray-400">
              <li class="flex items-center mb-2">
                <div className="flex items-center gap-2">
                  <FaLocationArrow /> 21 / A Chittagong, Bangladesh.
                </div>
              </li>
              <li class="flex items-center">
                <div className="flex items-center gap-2">
                  <IoMailUnreadSharp /> art@craft.com
                </div>
              </li>
              <li class="flex items-center mb-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> (+880) - 1610945101
                </div>
              </li>
            </ul>
          </div>

          <div class=" mb-8 lg:mb-0">
            <h3 class="font-semibold mb-4">Quick Links</h3>
            <ul class="text-gray-400 space-y-2">
              <li>
                <Link to="/allCraft" class="hover:text-white">
                  All Crafts
                </Link>
              </li>
              <li>
                <Link to="/addCraft" class="hover:text-white">
                  Add Craft
                </Link>
              </li>
              <li>
                <Link to="/addSubcategory" class="hover:text-white">
                  Add Sub Category
                </Link>
              </li>
              <li>
                <Link to="/login" class="hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" class="hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div class=" mb-8 lg:mb-0">
            <h3 class="font-semibold mb-4">Sub Categories</h3>
            <ul class="text-gray-400 space-y-2">
              <li>
                <a class="hover:text-white">Landscape Painting</a>
              </li>
              <li>
                <a class="hover:text-white">Portrait Drawing</a>
              </li>
              <li>
                <a class="hover:text-white">Watercolour Painting</a>
              </li>
              <li>
                <a class="hover:text-white">SupportOil Painting</a>
              </li>
              <li>
                <a class="hover:text-white">Charcoal Sketching</a>
              </li>
              <li>
                <a class="hover:text-white">Cartoon Drawing</a>
              </li>
            </ul>
          </div>

          <div class="">
            <h3 class="font-semibold mb-4">Work Hours</h3>
            <p class="text-gray-400 mb-4">9 AM - 5 PM, Monday - Saturday</p>
            <Link to="/register">
              <button class="bg-bgprimary rounded-tl-xl rounded-br-xl text-white px-6 py-2 rounded hover:scale-105">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div class="mt-4 text-gray-500 text-center">
          <p>ArtCraft by @NowsCode</p>
          <p>Copyright © 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
