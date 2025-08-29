"use client";
import EyeOffSvg from "@/app/_svg/EyeOffSvg";
import EyeSvg from "@/app/_svg/EyeSvg";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "username is required"),
  password: z.string().min(8, "minimum 8 characters required"),
});

type TLoginSchema = z.infer<typeof loginSchema>;

const submit = (data: unknown) => {
  console.log("data : ", data);
};
const LoginForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2">
        <input
          {...register("username")}
          className="p-4 bg-white"
          type="text"
          placeholder="username"
        ></input>
        {errors.username && (
          <p className="text-red-500">{errors.username?.message}</p>
        )}
        <input
          {...register("password")}
          className="p-4 w-full bg-white relative"
          type={passwordVisibility ? "text" : "password"}
          placeholder="password"
          
        ></input>
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
        

        <div
        className="relative"
          onClick={() => {
            setPasswordVisibility(!passwordVisibility);
          }}
        >
            {passwordVisibility ? (
              <EyeSvg className="size-6 absolute right-3 bottom-6" />
            ) : (
              <EyeOffSvg className="size-6 absolute right-3 bottom-6" />
            )}
        </div>
        
        <button
          disabled={isSubmitting}
          className="bg-blue-600 p-2 rounded-2xl"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
