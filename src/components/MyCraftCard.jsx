import React from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import { IoIosPricetags, IoIosTime } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PiTimerFill } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCraftCard = ({ myCraft, myCrafts, setMyCrafts }) => {
  const {
    _id,
    itemName,
    craftImage,
    subCategoryName,
    price,
    shortDescription,
    rating,
    processTime,
    customization,
    stock,
    email,
    name,
  } = myCraft;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffe has been deleted.",
                icon: "success",
              });
              const remaining = myCrafts.filter((craft) => craft._id !== _id);
              setMyCrafts(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="" data-aos="zoom-in-up">
        <div className="border-2 relative">
          <div className="h-[300px] ">
            <img src={craftImage} className="h-full w-full p-4 " alt="" />
          </div>
          <div className="absolute top-1 right-4">
            <Link
              to={`/craftDetails/${_id}`}
              className="flex justify-center items-center text-center"
            >
              <button className="bg-bgprimary text-white px-4 py-2">
                <FaRegEye size={20} />
              </button>
            </Link>
          </div>
          <div className="px-4 pb-4 space-y-1">
            <div className="flex justify-between">
              <h4 className="uppercase text-sm font-semibold">
                {subCategoryName}
              </h4>
              <span className="flex items-center gap-x-1">
                <IoIosPricetags size={20} />
                {price}
              </span>
            </div>
            <h2 className="text-lg font-semibold">{itemName}</h2>
            <p className="text-lg">{shortDescription}</p>
            <div className="flex gap-x-4 ">
              <span className="flex items-center gap-x-1">
                <FaStar size={20} className="text-orange-500" /> {rating}
              </span>
              <span className="flex items-center gap-x-1">
                <PiTimerFill size={20} /> {processTime}
              </span>
            </div>
          </div>
          <div className="flex gap-2 px-4 mb-2">
            <Link
              to={`/editMyCraft/${_id}`}
              className="w-full border rounded-sm py-2 text-center hover:bg-bgprimary hover:text-white"
            >
              <button className="text-center">
                <FaEdit size={20} />
              </button>
            </Link>
            <Link className="w-full border rounded-sm py-2 text-center hover:bg-red-600 hover:text-white">
              <button onClick={() => handleDelete(_id)} className="">
                <RiDeleteBin6Fill size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
