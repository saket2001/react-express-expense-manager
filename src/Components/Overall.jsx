import React from "react";
import { OverallItem } from "./OverallItem";

export const Overall = () => {
  return (
    <div className="bg-white w-auto h-auto shadow-md mt-5 rounded-xl text-gray-800 p-2">
      <div className="flex justify-evenly gap-1">
        <OverallItem label="Expenses" amount="560" />
        <OverallItem label="Income" amount="1000" />
        <OverallItem label="Savings" amount="400" />
      </div>
    </div>
  );
};
