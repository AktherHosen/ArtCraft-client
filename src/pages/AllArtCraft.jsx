import React from "react";
import { useLoaderData } from "react-router-dom";
import ArtCraftCard from "../components/ArtCraftCard";

const AllArtCraft = () => {
  const allCrafts = useLoaderData();
  console.log(allCrafts);
  return (
    <div>
      <h1 className="my-3 uppercase font-bold text-md">All Art Craft</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allCrafts.map((craft) => (
          <ArtCraftCard key={craft._id} craft={craft}></ArtCraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtCraft;
