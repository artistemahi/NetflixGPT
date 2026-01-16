import React from "react";
import Validate from "../utils/Validate";
import { useRef } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
const Form = () => {
  const [isSignUpMode, setisSignUpMode] = useState(false);
  const [IsSubmit, setIsSubmit] = useState(false);
  const [IsErrorMessg, setErrorMssg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const signupCLickHandler = () => {
    setisSignUpMode(!isSignUpMode);
  };
  const submitbtnCLickHandler = () => {
    setIsSubmit(!IsSubmit);
    const ErrorMessg = Validate(email.current.value, password.current.value);
    setErrorMssg(ErrorMessg);
    // console.log(email.current.value);
    // console.log(password.current.value);

    if (ErrorMessg === null) {
      if (isSignUpMode) {
        // sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMssg(errorCode+"-"+errorMessage);
            // ..
            // goto browse page 
            
          });
      } else {
        // sign in logic
      }
    }
  };
  return (
    <form
      className="w-[400px] bg-black/75 p-10 mt-5 mb-5 rounded-md text-white"
      onSubmit={(e) => e.preventDefault()}
    >
      {!isSignUpMode ? (
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>
      ) : (
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      )}
      {isSignUpMode && (
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 rounded bg-zinc-800 px-4 py-3 placeholder-gray-400 outline-none focus:ring-1 focus:ring-white"
        />
      )}
      {/* email */}
      <input
        ref={email}
        type="email"
        placeholder="Email address"
        className="w-full mb-4 rounded bg-zinc-800 px-4 py-3 placeholder-gray-400 outline-none focus:ring-1 focus:ring-white"
      />

      {/* password */}
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-full mb-6 rounded bg-zinc-800 px-4 py-3 placeholder-gray-400 outline-none focus:ring-1 focus:ring-white"
      />

      {/* sign In button */}
      <button
        onClick={submitbtnCLickHandler}
        className="w-full rounded bg-red-600 py-3 font-bold hover:bg-red-700 transition"
      >
        {!isSignUpMode ? "Sign In" : "Sign Up"}
      </button>
      <p className="text-red-500 font-bold m-2">{IsErrorMessg}</p>

      {/* OR */}
      <p className="my-4 text-center text-sm text-gray-400">OR</p>

      {/* Sign-in code */}
      <button className="w-full rounded bg-zinc-700 py-3 font-semibold hover:bg-zinc-600 transition">
        Use a sign-in code
      </button>

      {/* links */}
      <p className="mt-4 cursor-pointer text-sm hover:underline">
        Forgot password?
      </p>

      <p className="mt-6 text-sm text-gray-400">
        New to Netflix?{" "}
        <button
          onClick={signupCLickHandler}
          className="cursor-pointer text-white hover:underline"
        >
          Sign up now
        </button>
      </p>

      <p className="mt-4 text-xs text-gray-500">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <span className="cursor-pointer text-blue-500 hover:underline">
          Learn more
        </span>
      </p>
    </form>
  );
};

export default Form;
