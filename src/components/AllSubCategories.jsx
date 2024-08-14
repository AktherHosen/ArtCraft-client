import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllSubCategories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error fetching categories:", error);
      });
  }, [setLoading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <span className="loading loading-infinity loading-lg size-20 text-red-700"></span>
      </div>
    );
  }
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
