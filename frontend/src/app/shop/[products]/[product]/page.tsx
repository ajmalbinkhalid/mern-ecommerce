import React from 'react'
import SingleProduct from './_components/SingleProduct'

const products = [
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
const page = () => {
  return (
    <div className='min-h-screen p-16 flex items-center'>
        <div className='grid grid-cols-2 gap-8 '>
            {features.map((item,index) =>(

           <SingleProduct 
           key={index}
           image={item.image}
           title={item.name}
           description={item.description}
           price={item.price}
           isAvailable={item.isAvailable}
            />

        ))}
            
        </div>
    </div>
  )
}

export default page