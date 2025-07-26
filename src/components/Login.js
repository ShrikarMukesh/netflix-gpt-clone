import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

/*
 * Login Component
 * Handles user authentication for both sign-in and sign-up
 * Allows toggling between sign-in and sign-up forms
 * Validates user input and displays error messages
 * Uses Firebase Authentication for user management
 * @returns {JSX.Element} Rendered Login component
 */
const Login = () => {
  // Function to handle sign-up form toggle
  const [isSignInForm, setIsSignInForm] = useState(true);
  // State to manage error messages
  // and references for email, password, and name inputs
  const [errorMessage, setErrorMessage] = useState(null);
  // useNavigate hook to programmatically navigate
  // between routes in the application
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Refs for form inputs
  // Using useRef to avoid unnecessary re-renders and to directly access DOM elements
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignForm = () => {
    // Function to toggle sign-up form visibility
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //checkValidData(email, password);
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm && name.current ? name.current.value : null
    );
    setErrorMessage(message);

    // Sign Up Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/46884233?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // Profile updated successfully
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL:
                    photoURL ||
                    "https://avatars.githubusercontent.com/u/46884233?v=4",
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://i.redd.it/zjgs096khv591.jpg" alt="Login Background" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* Only show full name input if it's a sign-up form */}
        {!isSignInForm && (
          <input
            ref={name}
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
        <p className="text-red-500  font-bold text-lg text-sm">
          {errorMessage}
        </p>
        {/* Show error message if validation fails */}
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
