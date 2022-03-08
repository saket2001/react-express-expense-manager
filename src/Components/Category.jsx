import React, { useState } from "react";

export const Category = ({ icon, title, sendCategory }) => {
  const [isActive, setActive] = useState(false);

  const classes =
    "rounded-full p-2 h-12 w-12 bg-blue-300 text-gray-600 flex justify-center items-center transform transition-all hover:scale-95 hover:shadow-md";

  const splClasses =
    "rounded-full p-2 h-12 w-12 bg-blue-700 text-gray-100 flex justify-center items-center transform transition-all hover:scale-95 hover:shadow-md";

  return (
    <div className="grid grid-cols-1 place-items-center">
      <div
        className={isActive ? splClasses : classes}
        onClick={() => {
          sendCategory(title);
          setActive((prev) => !prev);
        }}
      >
        {icon}
      </div>
      <p className="lg:text-lg text-base">{title}</p>
    </div>
  );
};
