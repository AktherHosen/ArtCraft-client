import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MyCraftCard from "../components/MyCraftCard";

const MyArtCraft = () => {
  const { user } = useAuth();
  const [myCrafts, setMyCrafts] = useState([]);
  const [filterOption, setFilterOption] = useState("All");

  useEffect(() => {
    fetch(`http://localhost:5000/myArtCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCrafts(data);
      });
  }, [user]);

  const filteredCrafts = myCrafts.filter((craft) => {
    if (filterOption === "All") return true;
    return craft.stock === filterOption;
  });

  return (
    <div>
      <h1>My Art Craft</h1>
      <div className="flex justify-end mb-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-2"
          >
            <li>
              <button onClick={() => setFilterOption("All")}>All</button>
            </li>
            <li>
              <button onClick={() => setFilterOption("inStock")}>
                In Stock
              </button>
            </li>
            <li>
              <button onClick={() => setFilterOption("madeToOrder")}>
                Made to Order
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {filteredCrafts.map((myCraft) => (
          <MyCraftCard
            key={myCraft._id}
            myCraft={myCraft}
            myCrafts={myCrafts}
            setMyCrafts={setMyCrafts}
          />
        ))}
      </div>
    </div>
  );
};

export default MyArtCraft;
