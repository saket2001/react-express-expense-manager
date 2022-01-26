import React from "react";

export const BackBtn = () => {
  return (
    <button
      className="w-1/3 flex gap-3 items-center px-3 py-1 text-gray-800 font-medium transition-all rounded-lg hover:bg-gray-200"
      onClick={() => {
        window.history.back();
      }}
    >
      <i class="fas fa-chevron-left text-gray-800 text-lg"></i>
      Go Back
    </button>
  );
};
