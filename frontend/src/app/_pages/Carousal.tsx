"use client";

import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../../public/images/home1.jpg";
import image2 from "../../../public/images/home2.jpg";
import image3 from "../../../public/images/home3.jpg";

const Carousal = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  const gallery = [
    {
      image: image1,
      heading: "Dress in elegence",
      subHeading: "in the right measure",
    },
    {
      image: image2,
      heading: "Beauty in Balanced Proportions",
      subHeading: "Grace in Every Detail",
    },
    {
      image: image3,
      heading: "Understated, Never Overlooked",
      subHeading: "minimal, Yet Memorable",
    },
  ];

  const length = gallery.length;

  const next = () => {
    if (count < length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const prev = () => {
    if (count > 0) {
      setCount(count - 1);
    }else{
      setCount(length-1)
    }
  };

  console.log(count);

  return (
      <div className="relative min-h-screen flex flex-col justify-center items-center w-full">
          <Image src={gallery[count].image} alt="image" fill className="object-fill brightness-60"/>
          <div className="relative text-center text-white">
            <h1 className="text-7xl font-bold text-center">
              {gallery[count].heading}
            </h1>
            <h1 className="text-2xl font-medium">
              {gallery[count].subHeading}
            </h1>
          </div>
        <div className="absolute flex items-center justify-between h-full w-full">
          <button onClick={next} className="bg-white size-10 flex items-center justify-center text-5xl rounded-full">
            {"<"}
          </button>
          <button onClick={prev} className="bg-white size-10 flex items-center justify-center text-5xl rounded-full">
            {" "}
            {">"}
          </button>
        </div>
      </div>
  );
};

export default Carousal;
