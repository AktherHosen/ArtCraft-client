import React from "react";
import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const craft = useLoaderData();
  const { craftName, _id } = craft;
  return (
    <div>
      <h1>Craft Details of : {_id}</h1>
    </div>
  );
};

export default CraftDetails;
