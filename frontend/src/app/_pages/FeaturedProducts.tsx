import React from "react";
import feature1 from "../../../public/images/suits (1).jpg";
import feature2 from "../../../public/images/suits (2).jpg";
import feature3 from "../../../public/images/suits (3).jpg";
import feature4 from "../../../public/images/suits (4).jpg";
import Card from "../_components/Card";

const FeaturedProducts = () => {

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
    ]
  return (
    <div className="">
      <h1 className="text-7xl mb-5 text-center font-bold">Featured Products</h1>
      <div className="grid grid-cols-4 gap-3 p-2">

        {features.map((item,index) =>(

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

export default FeaturedProducts;
