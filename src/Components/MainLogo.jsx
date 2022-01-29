import React from "react";

export const MainLogo = ({ color = "blue" }) => {
  return (
    <h1
      className={`py-1 m-1 flex items-center ${color} font-semibold lg:text-2xl text-lg gap-1`}
    >
      {color === "blue" ? (
        <img
          src="https://img.icons8.com/dotty/35/4a90e2/rupee.png"
          alt="mrm logo"
        />
      ) : (
        <img
          src="https://img.icons8.com/dotty/35/ffffff/rupee.png"
          alt="mrm logo"
        />
      )}
      <p className="text-gray-100">MRM</p>
    </h1>
  );
};
