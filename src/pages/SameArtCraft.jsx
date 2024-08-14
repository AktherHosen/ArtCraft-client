import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SameCategoryCard from "../components/SameCategoryCard";

const SameArtCraft = () => {
  const { subCategory } = useParams();
  const [sameCategory, setSameCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subCategory) {
      fetch(`http://localhost:5000/sameCategory/${subCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setSameCategory(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [subCategory, setLoading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <span className="loading loading-infinity loading-lg size-20 text-red-700"></span>
      </div>
    );
  }

  return (
    <div>
      {sameCategory.length > 0 ? (
        <>
          <h3 className="text-textsecondary font-bold my-2 text-md uppercase">
            {subCategory}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-[3.4rem]">
            {sameCategory.map((item) => (
              <SameCategoryCard key={item._id} item={item}></SameCategoryCard>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-red-600">Opps!! No similar categories found.</h1>
      )}
    </div>
  );
};

export default SameArtCraft;
