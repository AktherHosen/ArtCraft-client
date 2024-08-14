import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SameArtCraft = () => {
  const { subCategory } = useParams();
  console.log(subCategory);
  const [sameCategory, setSameCategory] = useState([]);

  useEffect(() => {
    if (subCategory) {
      fetch(`http://localhost:5000/sameCategory/${subCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setSameCategory(data);
        });
    }
  }, []);

  return (
    <div>
      <div>
        {sameCategory.length > 0 ? (
          <h1>Similar Category Cards: {sameCategory.length}</h1>
        ) : (
          <h1>No similar categories available</h1>
        )}
      </div>
    </div>
  );
};

export default SameArtCraft;
