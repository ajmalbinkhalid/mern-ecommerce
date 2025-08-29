import Image from "next/image";
import React from "react";
import background from "../../../public/images/contactbg.webp";
import Location from "../_svg/Location";
import ContactSvg from "../_svg/ContactSvg";
import EmailSvg from "../_svg/EmailSvg";

const page = () => {
  return (
    <div className="h-screen">
      <div className="relative h-full">
        <Image alt="image" src={background} fill className="object-cover" />
      </div>
      <div className=" absolute top-1/2 text-white p-5 max-md:top-1/4">
        <div className="text-center">
          <h1 className="text-5xl mb-4 max-md:text-3xl">CONTACT US</h1>
          <p className="mb-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            hic eum labore repudiandae! Saepe qui harum neque sed rerum, fugit
            ullam id quidem consequatur rem veniam quo sint, repellendus
            doloremque eveniet fuga excepturi. Voluptates dignissimos sint
            accusantium ut provident ad assumenda, fuga voluptate, harum eum cum
            eaque asperiores odit expedita.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex bg-blue-300/20 p-3 gap-5 max-md:flex-col">
            <div className="flex">
              <Location className="size-12" />
              <div>
                <h2>Address</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, placeat!
                </p>
              </div>
            </div>
            <div className="flex">
              <ContactSvg className="size-12" />
              <div>
                <h2>Contact</h2>
                <p>+918585858585</p>
              </div>
            </div>
            <div className="flex">
              <EmailSvg className="size-12" />
              <div>
                <h2>Email</h2>
                <p>info@gnmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
