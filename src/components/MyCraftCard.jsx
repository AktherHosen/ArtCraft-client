import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPricetags, IoIosTime } from "react-icons/io";
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
            <div className="flex gap-2">
              <Link to={`/craftDetails/${_id}`}>
                <button
                  className="rounded-md text-md text-textsecondary uppercase
         font-semibold hover:underline-offset-2 underline"
                >
                  Details
                </button>
              </Link>
              <Link to={`/editMyCraft/${_id}`}>
                <button
                  className="rounded-md text-md text-textsecondary uppercase
         font-semibold hover:underline-offset-2 underline"
                >
                  Edit
                </button>
              </Link>
              <Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="rounded-md text-md text-textsecondary uppercase
         font-semibold hover:underline-offset-2 underline"
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
