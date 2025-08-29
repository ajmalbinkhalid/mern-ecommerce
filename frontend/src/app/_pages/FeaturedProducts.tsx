import React from "react";
import feature1 from "../../../public/images/feature1.jpeg";
import feature2 from "../../../public/images/feature2.jpg";
import feature3 from "../../../public/images/feature3.jpg";
import feature4 from "../../../public/images/feature4.jpeg";
import Card from "../_components/Card";

const FeaturedProducts = () => {

    const features = [
        {
            name : 'ADAS',
            description : 'five star rating',
            price : 420,
            image : feature1
        },
        {
            name : 'Super Charging',
            description : 'fast charge',
            price : 42,
            image : feature2
        },
        {
            name : 'Speaker',
            description : 'Jbl speakers',
            price : 42,
            image : feature3
        },
        {
            name : 'Ventillated seats',
            description : 'seat comfort',
            price : 42,
            image : feature4
        }
    ]
  return (
    <div className="bg-gray-300">
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
