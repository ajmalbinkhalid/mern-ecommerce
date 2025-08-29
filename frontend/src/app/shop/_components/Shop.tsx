import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {
    image : string | StaticImageData
    title : string
   
}

const Shop = ({image, title} : Props) => {


  return (
    <Link href={`/shop/${title}`}>
          <div className="h-50 relative overflow-hidden group">
            <h1 className="absolute h-full w-full flex justify-center items-center text-white font-medium text-2xl z-10">{title}</h1>
            <Image className="object-cover brightness-50 transition-transform duration-500 group-hover:scale-110 group-hover:brightness-30" src={image} alt="image" fill />
          </div>
        
      </Link>
  )
}

export default Shop