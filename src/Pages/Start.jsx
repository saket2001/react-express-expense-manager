import React from "react";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div className="w-full min-h-screen bg-blue-800 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center p-3 text-gray-200 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-center lg:text-7xl text-5xl font-bold my-2 font-spl">
          MRM
        </h1>
        <p className="text-base font-normal my-1">
          Money Managing Made Simpler
        </p>
      </div>

      <div className="w-full flex flex-col items-center self-end gap-4 p-3 text-gray-200 mt-8">
        <Link
          className="w-3/4 px-4 py-2 rounded-lg bg-gray-200 text-black text-lg border-2  font-normal text-center transition-all ease-in shadow-lg hover:scale-95"
          to="/sign-up"
        >
          Get Started
        </Link>

        <Link
          className="w-3/4 px-4 py-2 rounded-lg border-gray-200 text-gray-200 text-lg font-normal text-center border-2  transition-all ease-in odd:shadow-lg hover:border-blue-600 hover:bg-transparent hover:bg-blue-600"
          to="/sign-in"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};
