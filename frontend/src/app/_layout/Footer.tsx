import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="flex w-full justify-between bg-gray-300 h-30 px-10 py-6
      max-sm:flex-col max-sm:gap-10 max-sm:justify-center max-sm:items-center max-sm:h-80
      max-sm: "
      >
        <h1 className="font-bold text-2xl text-center">My Shop</h1>
        <div className="text-center">
          <h1 className="font-bold text-2xl text-center min-sm:text-left">
            Links
          </h1>
          <div className="space-x-2 text-center">
            <span>Login</span>
            <span>Contact</span>
            <span>Shop</span>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-2xl">Get in Touch</h1>
          <span>Payyannur (via) Kannur District</span>
          <span>W I F</span>
        </div>
      </div>
      <div className="text-center font-medium bg-gray-400">
        Crafted by Urbunhub Innovations
      </div>
    </div>
  );
};

export default Footer;
