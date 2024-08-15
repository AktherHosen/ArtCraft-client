import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src="https://i.ibb.co/8KTbwVM/notFound.png"
        className="h-[400px] "
        alt=""
      />
      <div className="text-center">
        <Link to="/">
          <button className="bg-bgprimary text-white px-4 py-2 ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
