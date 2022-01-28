import React from "react";

export const SelectBtn = ({ title, options }) => {
  return (
    <select
      name={title}
      id={title}
      className="p-2 px-4 text-base rounded-md outline-blue-800 bg-cyan-200 text-gray-700"
      required={true}
    >
      {title}
      {options.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
};
