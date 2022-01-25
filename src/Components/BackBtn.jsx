import React from "react";
import { Link } from "react-router-dom";

export const BackBtn = ({ link = "/" }) => {
  return (
    <Link
      to={link}
      className="w-1/3 flex gap-3 items-center px-3 py-1 text-gray-800 font-medium transition-all rounded-lg hover:bg-gray-200"
    >
      <i class="fas fa-chevron-left text-gray-800 text-lg"></i>
      Go Back
    </Link>
  );
};
