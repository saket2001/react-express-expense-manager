import React from "react";

export const Category = ({ icon, title }) => {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <div className="rounded-full p-2 h-12 w-12 bg-blue-300 flex justify-center items-center transform transition-all hover:scale-95 hover:shadow-md">
        {icon}
      </div>
      <p className="lg:text-lg text-base text-gray-700">{title}</p>
    </div>
  );
};
