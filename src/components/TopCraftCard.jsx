import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { PiTimerFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopCraftCard = ({ topCraft }) => {
  const {
    _id,
    itemName,
    craftImage,
    subCategoryName,
    price,
    shortDescription,
    rating,
    processTime,
    stock,
  } = topCraft;
  return (
    <div className="shadow-sm" data-aos="fade-up" data-aos-duration="2000">
      <div className="border-2 border-black relative">
        <img src={craftImage} className="h-[300px] w-full p-4 " alt="" />
        <div className="absolute top-1 right-4">
          <button className="bg-bgprimary text-white px-2 py-1">{stock}</button>
        </div>
        <div className="px-4 pb-4 space-y-1">
          <div className="flex justify-between">
            <h4 className="uppercase  text-sm font-semibold">
              {subCategoryName}
            </h4>
            <span className="flex items-center gap-x-1">
              <IoIosPricetags size={20} />
              {price}
            </span>
          </div>
          <h2 className="text-lg font-semibold">{itemName}</h2>
          <p className="text-lg">{shortDescription}</p>
          <div className="flex gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaStar size={20} className="text-orange-500" /> {rating}
            </span>
            <span className="flex items-center gap-x-1">
              <PiTimerFill size={20} /> {processTime}
            </span>
          </div>
          <Link to={`/craftDetails/${_id}`}>
            <button className="w-full py-2 bg-bgprimary text-white mt-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCraftCard;
