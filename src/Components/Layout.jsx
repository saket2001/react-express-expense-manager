import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  const currLink = window.location.pathname;

  const normalClasses =
    "flex flex-col justify-end items-center p-1 m-1 transform transition hover:text-blue-600";

  const activeClasses =
    "flex flex-col justify-end items-center p-1 m-1 transform transition font-bold text-blue-800";

  return (
    <div className="w-full min-h-screen max-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 h-auto overflow-y-auto overflow-x-hidden">
        {children}
      </div>
      {/* nav */}
      <div className="w-full self-end p-2 drop-shadow-md text-gray-500 bg-gray-200 z-10 sticky">
        <ul className="flex items-center justify-evenly gap-2">
          <li>
            <Link
              to="/dashboard"
              className={
                currLink === "/dashboard" ? activeClasses : normalClasses
              }
            >
              <i class="fas fa-home text-xl"></i>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-new"
              className={
                currLink === "/add-new" ? activeClasses : normalClasses
              }
            >
              <i class="fas fa-plus text-xl"></i>
              Add
            </Link>
          </li>
          <li>
            <Link to="/add-new-transaction" className={normalClasses}>
              <i class="fas fa-wallet text-xl"></i>
              Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/savings"
              className={
                currLink === "/savings" ? activeClasses : normalClasses
              }
            >
              <i class="fas fa-piggy-bank text-xl"></i>
              Savings
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={
                currLink === "/profile" ? activeClasses : normalClasses
              }
            >
              <i class="fas fa-user-circle text-xl"></i>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
