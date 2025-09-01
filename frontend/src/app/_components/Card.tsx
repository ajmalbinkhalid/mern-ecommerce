import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    image : string | StaticImageData
    title : string
    description : string
    price : number
}

const Card = ({image, title, description, price} : Props) => {
  return (
     <Link href={`/shop/products/${title}`} className="rounded-2xl bg-black text-white">
          <div className="relative h-[250px] brightness-50">
            <Image
              className="object-cover rounded-t-2xl"
              src={image}
              alt="image"
              fill
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-medium">{title}</h1>
            <p>{description}</p>
            <p>${price}</p>
          </div>
        </Link>
  )
}

export default Card