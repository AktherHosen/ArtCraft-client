import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Category.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const AllSubCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        toast.error("Error fetching categories:", error);
      });
  }, []);
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div>
      <h1 className="text-lg font-semibold uppercase my-2">All Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat._id} data-aos="zoom-in">
            <Link to={`/sameArt&Craft/${cat.subCategoryName}`}>
              <div className=" border-4 border-black ">
                <img
                  src={cat.subCategoryImage}
                  className="h-52 w-full hover:p-2 transition-all"
                  alt=""
                />
              </div>
              <h3 className="font-semibold my-1 text-sm text-textprimary">
                {cat.subCategoryName}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSubCategories;
