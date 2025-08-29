import React from "react";
import shop1 from "../../../public/images/shop1.jpg";
import shop2 from "../../../public/images/shop2.jpg";
import shop3 from "../../../public/images/shop3.jpg";
import shop4 from "../../../public/images/shop4.webp";
import Shop from "./_components/Shop";

const page = () => {
  const shopData = [
    {
      title: "SUITS",
      image: shop1,
    },
    {
      title: "SHIRTS",
      image: shop2,
    },
    {
      title: "ACCESSORIES",
      image: shop3,
    },
    {
      title: "GADGETS",
      image: shop4,
    },
    {
      title: "GADGETS",
      image: shop4,
    },
    {
      title: "GADGETS",
      image: shop4,
    },
    {
      title: "GADGETS",
      image: shop4,
    },
    {
      title: "GADGETS",
      image: shop4,
    },
  ];
  return (
    <div>
      <h1 className="text-7xl mb-5 text-center font-bold max-md:text-4xl max-lg:text-6xl">
        CATEGORIES
      </h1>
      <p className="text-2xl mb-5 text-center font-medium">SHOP BY CATEGORY</p>
      <div className="grid grid-cols-4 gap-2 max-md:grid-cols-1 max-lg:grid-cols-2">
        {shopData.map((item, index) => (
          <Shop key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default page;
