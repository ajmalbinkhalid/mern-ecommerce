import Card from "@/app/_components/Card";
import React from "react";
import feature1 from "../../../../public/images/suits (1).jpg";
import feature2 from "../../../../public/images/suits (2).jpg";
import feature3 from "../../../../public/images/suits (3).jpg";
import feature4 from "../../../../public/images/suits (4).jpg";

const page = () => {
  const features = [
    {
            name : 'Tweed Suit',
            description : 'A suit made from a rough, tightly woven wool fabric, ideal for colder weather',
            price : 420,
            image : feature1
        },
        {
            name : 'Linen Suit',
            description : 'A light and breathable suit made from linen, perfect for summer.',
            price : 42,
            image : feature2
        },
        {
            name : 'Velvet Suit',
            description : 'A luxurious suit made from velvet, often for special evening events.',
            price : 42,
            image : feature3
        },
        {
            name : 'Plaid Suit',
            description : 'A suit with a checked or patterned fabric.',
            price : 42,
            image : feature4
        }
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
              title={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
    </div>
  );
};

export default page;
