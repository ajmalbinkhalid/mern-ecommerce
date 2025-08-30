import React from 'react'
import SingleProduct from './_components/SingleProduct'
import product1 from '../../../../../public/images/suits (1).jpg'
import product2 from '../../../../../public/images/suits (2).jpg'
import product3 from '../../../../../public/images/suits (3).jpg'
import product4 from '../../../../../public/images/suits (4).jpg'

const products = [
        {
            name : 'Tweed Suit',
            description : 'A suit made from a rough, tightly woven wool fabric, ideal for colder weather',
            price : 420,
            image : product1,
            isAvailable : true
        },
        {
            name : 'Linen Suit',
            description : 'A light and breathable suit made from linen, perfect for summer.',
            price : 42,
            image : product2,
            isAvailable : true
        },
        {
            name : 'Velvet Suit',
            description : 'A luxurious suit made from velvet, often for special evening events.',
            price : 42,
            image : product3,
            isAvailable : true
        },
        {
            name : 'Plaid Suit',
            description : 'A suit with a checked or patterned fabric.',
            price : 42,
            image : product4,
            isAvailable : true
        }
    ]

    
const page = () => {
  return (

    <div className='min-h-screen p-16 flex items-center'>
        <div className='grid grid-cols-2 gap-8 '>
            {products.map((item,index) =>(

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