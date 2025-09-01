import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string | StaticImageData;
  title: string;
  description: string;
  price: number;
  isAvailable: boolean
};

const SingleProduct = ({
  image,
  title,
  description,
  price,
  isAvailable,
}: Props) => {
  return (
    <div>
      <div className="relative h-100">
        <Image
          alt="product"
          src={image}
          className="object-cover rounded-2xl"
          fill
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-700">Address</p>
        <h4 className="font-extrabold">
          Price: <span className="text-gray-700">{price}</span> Availability : <span>{isAvailable}</span>
          <span className="text-gray-700">{}</span>
        </h4>
        <h4 className="font-extrabold">Description</h4>
        <p className="text-gray-700">{description}</p>
        <button className="bg-black text-white p-2 rounded-2xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
