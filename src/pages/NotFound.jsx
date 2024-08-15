import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <img src="https://i.ibb.co/8KTbwVM/notFound.png" alt="" />
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
