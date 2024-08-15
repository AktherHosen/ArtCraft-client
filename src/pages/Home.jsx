import React from "react";
import AllSubCategories from "../components/AllSubCategories";
import TopArtCrafts from "../components/TopArtCrafts";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllSubCategories />
      <TopArtCrafts />
    </div>
  );
};

export default Home;
