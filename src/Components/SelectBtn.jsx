import React from "react";

export const SelectBtn = ({ name, options, onChange, value }) => {
  return (
    <select
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      className="p-2 px-4 text-base rounded-md outline-blue-800 bg-cyan-200 text-gray-700"
      required={true}
    >
      {name}
      {options.map((opt) => (
        <option name={name} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};
