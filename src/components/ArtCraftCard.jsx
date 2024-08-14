import React from "react";
import { IoIosPricetags } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ArtCraftCard = ({ craft }) => {
  const {
    _id,
    itemName,
    craftImage,
    subCategoryName,
    price,
    rating,
    processTime,
    stock,
  } = craft;
  return (
    <div>
      <div className="w-full h-[220px] border p-2 rounded-md shadow-md">
        <div className="flex justify-center gap-4">
          <div className="border-2 w-1/2">
            <img src={craftImage} alt="" className="h-[200px] w-full p-1" />
          </div>
          <div className="w-1/2 flex flex-col items-start justify-center p-2 space-y-2">
            <h1 className="font-bold">{itemName}</h1>
            <h4 className="text-sm text-textsecondary font-semibold opacity-80">
              {subCategoryName}
            </h4>
            <div className="grid grid-cols-3 gap-x-2">
              <p className="flex items-center gap-1">
                <IoIosPricetags />
                {price}
              </p>
              <p className="flex items-center gap-1">
                <IoIosTime />
                {processTime}
              </p>
              <p className="flex items-center gap-1">
                <FaStar />
                {rating}
              </p>
            </div>
            <button className="px-3 py-1 border border-[#2980b9] hover:bg-bgprimary hover:text-white text-sm">
              {stock}
            </button>
            <Link to={`/craftDetails/${_id}`}>
              <button
                className="rounded-md text-md text-textsecondary uppercase
             font-semibold hover:underline-offset-2 underline"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraftCard;
