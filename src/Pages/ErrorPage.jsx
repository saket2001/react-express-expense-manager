import React from "react";
import { Link } from "react-router-dom";
import img from "../404.svg";

export const ErrorPage = () => {
  return (
    <div className="w-full h-full bg-blue-800 flex flex-col items-center justify-center text-gray-50">
      <div className="p-2 bg-blue-800">
        <img src={img} alt="404image" style={{ height: "80%" }} />
      </div>

      <div className="p-4 mx-2 flex flex-col items-center">
        <h1 className="lg:text-3xl text-xl mb-4 font-semibold">
          Oops!! Page Not Found
        </h1>
        <p className="text-lg text-center text-gray-300 font-light">
          Looks like you visited wrong link. Please check your url again
        </p>
        <Link to="/" className="my-4 underline">
          Go Home
        </Link>
      </div>
    </div>
  );
};
