import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
          src="https://i.redd.it/zjgs096khv591.jpg"
          alt="Login Background"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
      </div>

      <form className="bg-black p-12">
        <input
          type="text"
          placeholder="emailId"
          className="border p-2 m-2 w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-2 m-2 w-full max-w-xs"
        />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
