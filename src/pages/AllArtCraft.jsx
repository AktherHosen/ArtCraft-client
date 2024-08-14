import React from "react";
import { useLoaderData } from "react-router-dom";
import ArtCraftCard from "../components/ArtCraftCard";

const AllArtCraft = () => {
  const allCrafts = useLoaderData();
  return (
    <div>
      <h1 className="my-3 uppercase font-bold text-md">All Art Craft</h1>
      <div className="overflow-x-auto">
        <table className="table border-collapse border border-slate-400">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Item Name</th>
              <th>Customization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCrafts.map((craft) => (
              <ArtCraftCard key={craft._id} craft={craft}></ArtCraftCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraft;
