import React from "react";

export const TextArea = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <label className="font-semibold text-lg text-gray-800 px-1">
        {label}
      </label>
      <textarea
        className="p-2 text-base rounded-md outline-blue-800 bg-gray-300"
        rows="4"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
