import React from "react";

import product1 from "../../../public/images/suits (1).jpg";
import product2 from "../../../public/images/suits (2).jpg";
import product3 from "../../../public/images/suits (3).jpg";
import product4 from "../../../public/images/suits (4).jpg";
import Image from "next/image";

const products = [
  {
    name: "Tweed Suit",
    description:
      "A suit made from a rough, tightly woven wool fabric, ideal for colder weather",
    price: 649,
    image: product1,
    isAvailable: true,
  },
  {
    name: "Linen Suit",
    description:
      "A light and breathable suit made from linen, perfect for summer.",
    price: 699,
    image: product2,
    isAvailable: true,
  },
  {
    name: "Velvet Suit",
    description:
      "A luxurious suit made from velvet, often for special evening events.",
    price: 499,
    image: product3,
    isAvailable: true,
  },
  {
    name: "Plaid Suit",
    description: "A suit with a checked or patterned fabric.",
    price: 599,
    image: product4,
    isAvailable: true,
  },
];
const page = () => {
  return (
    <div className=" p-5 grid grid-cols-3">
        <table className="w-full text-left border-separate border-spacing-y-4 col-span-2">
            <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        {products.map((item,index)=>(
            
        
        <tbody  key={index}>
          <tr className="border-2">
            <td>
              <div className="relative size-20">
                <Image className="object-cover" fill alt="product" src={item.image}/>
              </div>
            </td>

            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <div className="flex gap-5">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </td>
            <td>{item.price}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
     
        ))}
         </table>
         <div className="bg-gray-300 rounded-2xl p-10 flex justify-center col-span-1 border">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Cart Total</h1>
                <p>Item Total</p>
                <hr />
                <p>Total</p>
                <button className="bg-black text-white px-30 py-2 rounded-2xl">Proceed to Checkout</button>
            </div>
         </div>
      
    </div>
  );
};

export default page;
