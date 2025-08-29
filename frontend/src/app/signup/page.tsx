
import React from "react";
import SignupForm from "./_components/SignupForm";

const Page = () => {
  

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-cyan-200 p-10 flex flex-col gap-5 rounded-2xl">
        <h1>SIGNUP TO YOUR ACCOUNT</h1>
        <p>PLEASE ENTER YOUR DETAILS</p>
       <SignupForm/>
        
        <p>Already have account <a className="underline" href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Page;
