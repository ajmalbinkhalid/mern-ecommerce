
import React from 'react'
import LoginForm from './_components/LoginForm';

const Page = () => {

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-blue-300 p-10 flex flex-col gap-5 rounded-2xl">
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <p>PLEASE ENTER YOUR DETAILS</p>
        <LoginForm/>
        
        <p>Dont have an account? <a className="underline" href="/signup">Signup</a></p>
      </div>
    </div>
  );
};

export default Page;
