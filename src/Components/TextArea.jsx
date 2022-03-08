import React from "react";

export const TextArea = ({
  label,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <label className="font-semibold text-lg text-gray-800 px-1">
        {label}
      </label>
      <textarea
        className="p-2 text-base rounded-md outline-blue-800 bg-cyan-100 border border-gray-400"
        rows="4"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      ></textarea>
    </div>
  );
};
