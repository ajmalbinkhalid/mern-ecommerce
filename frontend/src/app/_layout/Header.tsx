"use client";

import Link from "next/link";
import React, { useState } from "react";
import CartSvg from "../_svg/CartSvg";
import UserProfile from "../_svg/UserProfile";
import Hamburger from "../_svg/Hamburger";
import CloseIcon from "../_svg/CloseIcon";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="flex justify-between items-center h-18 px-4 bg-black text-white"
    >
      <h1 className="font-bold text-3xl">THE MEN COMPANY</h1>
      <div className="flex gap-5 font-medium items-center max-md:hidden">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
        <div className="flex gap-5">
          <div className="relative">
            <div className="absolute size-4 font-bold text-black -top-3 -right-1 rounded-full flex items-center justify-center">0</div>
            <CartSvg className="size-8" />
          </div>
          <UserProfile className="size-8" />
        </div>
      </div>
      <Hamburger
        onClick={() => setMenu(true)}
        className="size-8 min-md:hidden"
      />
      {menu === true && (
        <div
          className="bg-blue-300 w-1/2 h-full fixed right-0 top-0
         flex flex-col gap-5 items-center justify-center z-10"
        >
          <CloseIcon onClick={() => setMenu(false)} className="size-8" />
          <div className="flex flex-col gap-5 font-medium items-center">
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Login</Link>
            </div>
            <div className="flex gap-5">
              <CartSvg className="size-8" />
              <UserProfile className="size-8" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
