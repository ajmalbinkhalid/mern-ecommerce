"use client";

import EyeOffSvg from "@/app/_svg/EyeOffSvg";
import EyeSvg from "@/app/_svg/EyeSvg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupForm = () => {
  const signupUser = z
    .object({
      // 2 : create user signup validation
      username: z.string().min(1, "username is required"),
      email: z.email().min(1, "email is required"),
      password: z.string().min(8, "minimum 8 characters is required"),
      confirmPassword: z.string().min(8, "minimum 8 characters is required"),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: "custom",
          path: ["confirmPassword"], // 👈 attach error to confirmPassword
          message: "Passwords do not match",
        });
      }
    });

  const {
    // 1 : initialise useform from react-hook-form
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeSignupUser>({
    // 4 : link type and validation of signup user to userform
    resolver: zodResolver(signupUser),
  });

  type TypeSignupUser = z.infer<typeof signupUser>; // 3 : set type of signup user

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-2"
      >
        <input
          {...register("username")} // 5 : get data of user form by name
          className="p-4 bg-white"
          type="text"
          placeholder="username"
        ></input>
        {errors.username && ( // 6 : get error of user form by name
          <p className="text-red-500">{errors.username?.message}</p>
        )}
        <input
          {...register("email")}
          className="p-4 bg-white"
          type="email"
          placeholder="email"
        ></input>
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <div className="relative">
          <input
            {...register("password")}
            className="p-4 w-full bg-white"
            type={passwordVisibility ? "text" : "password"}
            placeholder="password"
          ></input>
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <div
            onClick={() => {
              setPasswordVisibility(!passwordVisibility);
            }}
          >
            {passwordVisibility ? (
              <EyeSvg className="size-6 absolute right-3 top-1/3" />
            ) : (
              <EyeOffSvg className="size-6 absolute right-3 top-1/3" />
            )}
          </div>
        </div>
        <div className="relative">
          <input
            {...register("confirmPassword")}
            className="p-4 w-full bg-white"
            type={confirmPasswordVisibility ? "text" : "password"}
            placeholder="confirm password"
          ></input>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}

          <div
            onClick={() => {
              setConfirmPasswordVisibility(!confirmPasswordVisibility);
            }}
          >
            {confirmPasswordVisibility ? (
              <EyeSvg className="size-6 absolute right-3 top-1/3" />
            ) : (
              <EyeOffSvg className="size-6 absolute right-3 top-1/3" />
            )}
          </div>
        </div>
        <button className="bg-cyan-700 p-2 rounded-2xl" type="submit">
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
