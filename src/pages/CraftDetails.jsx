import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { PiTimerFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const craft = useLoaderData();
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
    name,
    email,
  } = craft;
  return (
    <div>
      <h1 className="my-3 uppercase font-bold text-md">
        Details of : {itemName}
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div
          className="h-[400px] w-full md:w-1/2 border-2"
          data-aos="fade-right"
        >
          <img src={craftImage} className="h-full w-full p-2" alt="" />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center"
          data-aos="fade-left"
        >
          <div className="px-4 pb-4 space-y-2">
            <div className="flex justify-between">
              <h4 className="uppercase text-textprimary opacity-80 text-sm font-semibold">
                {subCategoryName}
              </h4>
              <span className="flex items-center gap-x-1">
                <IoIosPricetags size={20} />
                {price}
              </span>
            </div>
            <h2 className="text-xl font-semibold">{itemName}</h2>
            <p className="text-lg">{shortDescription}</p>
            <div className="flex gap-x-4">
              <span className="flex items-center gap-x-1">
                <FaStar size={20} className="text-orange-500" /> {rating}
              </span>
              <span className="flex items-center gap-x-1">
                <PiTimerFill size={20} /> {processTime} hr
              </span>
            </div>
            <button className="px-2 py-1 border border-[#2980b9] rounded-sm hover:bg-bgprimary hover:text-white">
              {stock}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
