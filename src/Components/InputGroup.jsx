import React from "react";

export const InputGroup = ({
  label,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <label className="font-semibold text-lg text-gray-800 px-1">
        {label}
      </label>
      <input
        className="p-2 text-base rounded-md outline-blue-800 bg-cyan-100 border border-gray-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
