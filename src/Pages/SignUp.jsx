import React from "react";
import { Link } from "react-router-dom";
import { InputGroup } from "../Components/InputGroup";
import { MainLogo } from "../Components/MainLogo";

export const SignUp = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800 flex flex-col p-2">
      {/* logo */}
      <MainLogo />
      {/* heading */}
      <h2 className="lg:text-2xl text-xl font-medium px-2 m-1 mt-2">
        Welcome To <span className="font-bold text-blue-800">MRM</span>
      </h2>
      {/* heading p */}
      <p className="text-base lg:text-lg px-2 py-1 m-1 text-gray-600">
        Welcome! Create an account to store and manage your finanical data. All
        your data is safe with us.
      </p>
      {/* google oauth button */}
      <button className="mx-2 rounded-md border-2 border-gray-800 px-3 py-2 my-2 text-base lg:text-lg flex gap-2 items-center justify-center">
        <i class="fab fa-google"></i>
        Sign Up With Google
      </button>
      {/* divider */}
      <div className="flex items-center gap-2 px-2 my-2">
        <div className="bg-gray-400 w-1/2 h-1 rounded-lg"></div>
        <p className="text-center">OR</p>
        <div className="bg-gray-400 w-1/2 h-1 rounded-lg"></div>
      </div>
      {/* name input */}
      <InputGroup label={"Name"} placeholder={"Enter your name"} />
      {/* email input */}
      <InputGroup label={"Email"} placeholder={"@gmail.com"} />
      {/* password input */}
      <InputGroup label={"Password"} placeholder={"**********"} />

      {/* sign up button */}
      <Link
        className="m-1 my-3 px-4 py-2 rounded-lg bg-blue-800 text-gray-50 text-lg border-2 font-normal text-center"
        to="/dashboard?filter=latest"
      >
        Sign Up
      </Link>
      {/* sign in page link */}
      <p className="text-lg px-2 py-1 mx-2 my-4">
        Already have an account?
        <Link className="w-auto text-blue-800 underline ml-2" to="/sign-in">
          Sign In
        </Link>
      </p>
    </div>
  );
};
