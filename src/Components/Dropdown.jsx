import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = ({
  title,
  options = [],
  id = "dropdownButton",
  tag = "dropdown",
}) => {
  return (
    <>
      <button
        id={id}
        data-dropdown-toggle={tag}
        className="text-gray-800 bg-cyan-200 font-medium rounded-lg text-base px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {title}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id={tag}
        class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-700 shadow dark:bg-gray-200"
      >
        <ul class="py-1" aria-labelledby={id}>
          {options.map((opt) => (
            <li>
              <Link
                to={opt.link ? opt.link : "#"}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-800"
              >
                {opt.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
