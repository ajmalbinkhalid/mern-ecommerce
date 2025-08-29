import Card from "@/app/_components/Card";
import React from "react";
import feature1 from "../../../../public/images/feature1.png";
import feature2 from "../../../../public/images/feature2.jpg";
import feature3 from "../../../../public/images/feature3.jpg";
import feature4 from "../../../../public/images/feature4.jpeg";

const page = () => {
  const features = [
    {
      title: "ADAS",
      description: "five star rating",
      price: 420,
      image: feature1,
    },
    {
      title: "Super Charging",
      description: "fast charge",
      price: 42,
      image: feature2,
    },
    {
      title: "Speaker",
      description: "Jbl speakers",
      price: 42,
      image: feature3,
    },
    {
      title: "Ventillated seats",
      description: "seat comfort",
      price: 42,
      image: feature4,
    },
  ];

  return (

    <div >
        <h1 className="text-6xl mb-5 text-center font-bold mt-5">PRODUCTS</h1>
        <p className="p-5">{features.length} Products</p>
        <div className="grid grid-cols-4 p-5 w-full gap-5">
          {features.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
    </div>
  );
};

export default page;
