import React from "react";
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className="my-8 text-white">
      <h1 className="text-lg font-semibold uppercase my-2">
        Companies Trust us
      </h1>
      <Marquee>
        <img src="https://i.ibb.co/17PznRp/menufacture-2.png" alt="" />
        <img src="https://i.ibb.co/9VQpYJH/menufacture-3.png" alt="" />
        <img src="https://i.ibb.co/qp0vZwM/menufacture-5.png" alt="" />
        <img src="https://i.ibb.co/wgfNgcD/menufacture-6.png" alt="" />
        <img src="https://i.ibb.co/7vzGBp3/menufacture-7.png" alt="" />
        <img src="https://i.ibb.co/sRPPGWM/menufacture-8.png" alt="" />
      </Marquee>
    </div>
  );
};

export default Companies;
