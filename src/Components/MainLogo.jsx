import React from "react";

export const MainLogo = ({ color = "text-blue-800" }) => {
  return (
    <h1
      className={`py-1 m-1 flex items-center ${color} font-semibold lg:text-2xl text-lg gap-1`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
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
      MRM
    </h1>
  );
};
