"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Page = () => {
  const schema = z.object({
    //1
    firstName: z.string().min(2, "Name must be at least 2 characters"),
    lastName: z.string().min(2, "Name must be at least 2 characters"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    email: z.string().min(1, "minimu  characters required"),
    address: z.string().min(15, "Address must be at least 15 characters"),
    zipCode: z.string().min(6, "Enetr atleast 6 digits"),
    country: z
      .string()
      .refine((value) => value !== "", " Please select a country"),
  });

  type schemaType = z.infer<typeof schema>; // 3 : set type of signup user

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({
    resolver: zodResolver(schema),
  }); //2

  const submit = (data: schemaType) => {
    console.log("Form data:", data);
  };

  console.log("errors::",errors)

  return (
    <div className="grid grid-cols-3 p-5 gap-5">
      <form
        onSubmit={handleSubmit(submit)}
        className=" flex flex-col gap-4 col-span-2 bg-gray-300 p-5 rounded-2xl"
        action=""
      >
        <h1 className="text-4xl">Checkout</h1>
        <div className="flex gap-4">
          <input
            {...register("firstName", { required: "First Name is required" })}
            className="bg-white p-2"
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName?.message}</p>
          )}
          <input
            {...register("lastName", { required: "Last Name is required" })}
            className="bg-white p-2"
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName?.message}</p>
          )}
        </div>
        <input
          {...register("phoneNumber", { required: "Phone Number is required" })}
          className="bg-white p-2"
          type="number"
          placeholder="Phone Number"
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber?.message}</p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          className="bg-white p-2"
          type="email"
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <input
          {...register("address", { required: "Address is required" })}
          className="bg-white p-2"
          type="text"
          placeholder="Address"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address?.message}</p>
        )}
        <input
          {...register("zipCode", { required: "Zip Code is required" })}
          className="bg-white p-2"
          type="number"
          placeholder="Zip Code"
        />
        {errors.zipCode && (
          <p className="text-red-500">{errors.zipCode?.message}</p>
        )}
        <select
          {...register("country")}
          defaultValue=""
          className="bg-white p-2"
        >
          <option value="" disabled>
            Country/Region
          </option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="India">India</option>
          <option value="Qatar">Qatar</option>
          <option value="UAE">UAE</option>
          <option value="Oman">Oman</option>
        </select>
        {errors.country && (
          <p className="text-red-500">{errors.country?.message}</p>
        )}
        <button type="submit" className="bg-black text-white py-2 rounded-2xl">
          Place Order
        </button>
      </form>
      <div className="col-span-1 flex flex-col gap-4 bg-gray-300 p-5 rounded-2xl">
        <h1 className="text-3xl">Order Summary</h1>
        <div className="flex justify-between">
          <p>Item Total</p>
          <span>₹0.00</span>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <span>₹0.00</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <span>₹0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
