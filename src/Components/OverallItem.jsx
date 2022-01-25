import React from "react";

export const OverallItem = ({ label, amount = 0, percentage = 0 }) => {
  return (
    <div className="flex flex-col items-center p-2 mb-3">
      <p className="text-lg font-medium text-gray-700 my-1">{label}</p>
      {/* outer div */}
      <div className="w-24 h-24 rounded-full border-8 border-gray-200 text-blue-800 font-extrabold text-2xl">
        {/* inner div */}
        <div className="w-20 h-20 flex flex-col justify-center items-center rounded-full border-blue-800">
          {amount}
          <i class="fas fa-rupee-sign"></i>
        </div>
      </div>
    </div>
  );
};
