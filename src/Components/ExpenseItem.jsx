import React from "react";

export const ExpenseItem = ({ title, date, amount }) => {
  return (
    <div className="flex gap-2 items-center justify-between p-3 shadow rounded bg-cyan-200">
      <div className="flex flex-col">
        <h5 className="text-gray-800 font-bold lg:text-md text-base">
          {title}
        </h5>
        <p className="text-gray-500 text-sm">{new Date(date).toDateString()}</p>
      </div>
      <div className="flex items-center gap-1 text-gray-700 font-bold">
        <p className="text-xl">{amount}</p>
        <i class="fas fa-rupee-sign"></i>
      </div>
    </div>
  );
};
