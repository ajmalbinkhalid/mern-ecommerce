import React from "react";
import men from "../../../public/images/men.jpg";
import women from "../../../public/images/women.jpeg";
import accessories from "../../../public/images/accessories.jpg";
import kids from "../../../public/images/kids.jpg";
import Image from "next/image";

const Catagory = () => {
  const store = [
    {
      name: "Men",
      image: men,
    },
    {
      name: "Women",
      image: women,
    },
    {
      name: "Accessories",
      image: accessories,
    },
    {
      name: "Kids",
      image: kids,
    },
  ];
  return (
    <div>
        <h1 className="text-7xl mb-5 text-center font-bold">Category</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 max-md:grid-cols-1 max-md:grid-rows-4 max-md:h-auto">
          <div className=" col-span-1 row-span-2 relative h-[500px] max-md:row-span-1">
            <Image className="object-cover" alt="image" src={store[0].image} fill/>
            <h2 className="text-5xl absolute bottom-0 bg-white p-5 m-2">{store[0].name}</h2>
          </div>
          <div className="col-span-1 row-span-2 relative h-[500px] max-md:row-span-1">
            <Image className="object-cover" alt="image" src={store[1].image} fill/>
            <h2 className="text-5xl absolute bottom-0 bg-white p-5 m-2">{store[1].name}</h2>
          </div>
          <div className="h-auto col-span-1 row-span-1 relative max-md:row-span-1">
            <Image className="object-cover" alt="image" src={store[2].image} fill/>
            <h2 className="text-5xl absolute bottom-0 bg-white p-5 m-2">{store[2].name}</h2>
          </div>
          <div className="h-auto col-span-1 row-span-1 relative max-md:row-span-1">
            <Image className="object-cover" alt="image" src={store[3].image} fill/>
            <h2 className="text-5xl absolute bottom-0 bg-white p-5 m-2">{store[3].name}</h2>
          </div>
        </div>
    </div>
  );
};

export default Catagory;
