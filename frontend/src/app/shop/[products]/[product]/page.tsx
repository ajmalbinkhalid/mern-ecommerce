import React from "react";
import SingleProduct from "./_components/SingleProduct";
import product1 from "../../../../../public/images/suits (1).jpg";

const product = {
  name: "Tweed Suit",
  description:
    "A suit made from a rough, tightly woven wool fabric, ideal for colder weather",
  price: 420,
  image: product1,
  isAvailable: true,
};

const page = () => {
  return (
    <div className="min-h-screen p-16 flex items-center">
      <div className="grid grid-cols-2 gap-8 ">
        <SingleProduct
          image={product.image}
          title={product.name}
          description={product.description}
          price={product.price}
          isAvailable={product.isAvailable}
        />
      </div>
    </div>
  );
};

export default page;
