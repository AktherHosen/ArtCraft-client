import React, { useEffect, useState } from "react";
import TopCraftCard from "./TopCraftCard";
import toast from "react-hot-toast";

const TopArtCrafts = () => {
  const [topCrafts, setTopCrafts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allcraft")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopCrafts(data);
      })
      .catch((error) => {
        toast.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-lg font-semibold uppercase my-2">Top art craft</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topCrafts.slice(0, 6).map((topCraft) => (
          <TopCraftCard key={topCraft._id} topCraft={topCraft}></TopCraftCard>
        ))}
      </div>
    </div>
  );
};

export default TopArtCrafts;
