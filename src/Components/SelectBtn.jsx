import React, { useRef } from "react";

export const SelectBtn = ({ title, name, options, onChange, value }) => {
  const selectRef = useRef();

  return (
    <select
      name={name}
      id={name}
      ref={selectRef}
      onClick={() => onChange(selectRef?.current?.value)}
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
