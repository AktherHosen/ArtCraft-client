import React from "react";
import AllSubCategories from "../components/AllSubCategories";
import TopArtCrafts from "../components/TopArtCrafts";
import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllSubCategories />
      <TopArtCrafts />
      <Features />
    </div>
  );
};

export default Home;
