import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="my-8">
      <h1 className="text-lg font-semibold uppercase my-2">Features</h1>
      <div className="bg-gray-800 text-white text-opacity-50 p-8 h-full lg:h-[400px]">
        <div className="md:flex justify-between items-start gap-2">
          <div className="max-w-lg  ">
            <div className="">
              <h4 className="text-sm font-semibold  mb-2 uppercase">
                What We Do
              </h4>
              <h2 className="text-3xl font-bold  mb-4">
                Paint Your World with Excellence.
              </h2>
              <p className=" mb-6">
                Discover a world of artistic expression with unique handcrafted
                items, personalized designs, and inspiring artworks.
              </p>
              <Link to="/allArtCraft">
                <button className="border  px-6 py-3 font-semibold rounded">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 md:mt-0">
            <div>
              <h1 className="text-6xl font-bold ">01</h1>
              <h3 className="text-xl font-semibold  mb-2">
                Preparation & Planning
              </h3>
              <p className="">
                Choose the painting medium and surface canvas, paper, wood, etc.
              </p>
            </div>

            <div>
              <h1 className="text-6xl font-bold ">02</h1>
              <h3 className="text-xl font-semibold  mb-2">
                Sketch & Placement
              </h3>
              <p className="">
                Create an initial sketch or basic drawing to establish the
                position and proportions.
              </p>
            </div>

            <div>
              <h1 className="text-6xl font-bold ">03</h1>
              <h3 className="text-xl font-semibold  mb-2">
                Application of Color
              </h3>
              <p className="">
                Build up details and textures gradually, paying attention to
                lighting and shadows.
              </p>
            </div>

            <div>
              <h1 className="text-6xl font-bold ">04</h1>
              <h3 className="text-xl font-semibold  mb-2">
                Finishing & Completion
              </h3>
              <p className="">
                Add fine details, refine proportions, and fix elements that may
                need adjustment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
