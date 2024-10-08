import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MyCraftCard from "../components/MyCraftCard";

const MyArtCraft = () => {
  const { user } = useAuth();
  const [myCrafts, setMyCrafts] = useState([]);
  const [filterOption, setFilterOption] = useState("All");

  useEffect(() => {
    fetch(`https://artcraft-server.vercel.app/myArtCraft/${user?.email}`)
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
      <div className="flex justify-end mb-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="border bg-bgprimary text-white m-1 px-6 rounded-sm py-2"
          >
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
              <button onClick={() => setFilterOption("In stock")}>
                In Stock
              </button>
            </li>
            <li>
              <button onClick={() => setFilterOption("Made to Order")}>
                Made to Order
              </button>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-lg font-semibold uppercase my-2">My Art Craft</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCrafts.length > 0 ? (
          filteredCrafts.map((myCraft) => (
            <MyCraftCard
              key={myCraft._id}
              myCraft={myCraft}
              myCrafts={myCrafts}
              setMyCrafts={setMyCrafts}
            />
          ))
        ) : (
          <h1 className="text-red-600">Oops!! No craft items found.</h1>
        )}
      </div>
    </div>
  );
};

export default MyArtCraft;
