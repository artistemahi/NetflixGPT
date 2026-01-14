import React from "react";

const Form = () => {
  return (
    <form className="w-[400px] bg-black/75 p-10 rounded-md text-white">
      <h2 className="text-3xl font-bold mb-6">Sign In</h2>

      {/* email */}
      <input
        type="email"
        placeholder="Email address"
        className="w-full mb-4 rounded bg-zinc-800 px-4 py-3 placeholder-gray-400 outline-none focus:ring-1 focus:ring-white"
      />

      {/* password */}
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 rounded bg-zinc-800 px-4 py-3 placeholder-gray-400 outline-none focus:ring-1 focus:ring-white"
      />

      {/* sign In button */}
      <button className="w-full rounded bg-red-600 py-3 font-bold hover:bg-red-700 transition">
        Sign In
      </button>

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
        <span className="cursor-pointer text-white hover:underline">
          Sign up now
        </span>
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
