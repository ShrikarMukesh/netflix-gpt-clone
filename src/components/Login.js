import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  // Function to handle sign-up form toggle
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignForm = () => {
    // Function to toggle sign-up form visibility
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //checkValidData(email, password);
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://i.redd.it/zjgs096khv591.jpg" alt="Login Background" />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* Only show full name input if it's a sign-up form */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
