import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "./MainLogo";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/AuthSlice";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currLink = window.location.pathname;
  const [sideBar, setSideBar] = useState(false);

  const LogoutHandler = () => {
    dispatch(authActions.toggleLogin());
    navigate("/sign-in");
  };

  const normalClasses =
    "flex gap-2 items-center py-2 px-6 transition rounded-lg hover:text-blue-600 hover:bg-blue-200 lg:text-xl text-xl";

  const activeClasses =
    "flex gap-2 items-center py-2 px-6 transition rounded-lg font-bold text-blue-800 bg-blue-200 lg:text-xl text-xl";

  return (
    <div className="w-full min-h-screen max-h-screen bg-gray-100 flex flex-col relative overflow-y-scroll">
      {/* sidebar */}

      <div className="w-full flex justify-between p-2 bg-blue-800">
        <button
          className="flex flex-col gap-3 p-2 transition-all transform rounded-lg text-gray-100 hover:scale-110"
          onClick={() => setSideBar((prev) => !prev)}
        >
          <i class="fa fa-bars text-2xl" aria-hidden="true"></i>
        </button>
        <MainLogo color="white" />
      </div>

      {sideBar && (
        <div className="min-h-full w-3/4 bg-gray-100 flex flex-col gap-3 shadow-md text-gray-500 z-10 p-4 absolute">
          <ul className="flex flex-col items-start gap-2">
            <li className="mb-4">
              <button
                className="flex flex-col gap-3 p-3 w-full transition-all transform rounded-lg hover:scale-110 hover:text-blue-800"
                onClick={() => setSideBar((prev) => !prev)}
              >
                <i class="fas fa-times text-2xl"></i>
              </button>
            </li>
            <li className="w-full">
              <Link
                to="/dashboard"
                className={
                  currLink === "/dashboard" ? activeClasses : normalClasses
                }
              >
                <i class="fas fa-home text-2xl"></i>
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/add-new"
                className={
                  currLink === "/add-new" ? activeClasses : normalClasses
                }
              >
                <i class="fas fa-plus text-2xl"></i>
                Add
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/wallet"
                className={
                  currLink === "/wallet" ? activeClasses : normalClasses
                }
              >
                <i class="fas fa-wallet text-2xl"></i>
                Wallet
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/savings"
                className={
                  currLink === "/savings" ? activeClasses : normalClasses
                }
              >
                <i class="fas fa-piggy-bank text-2xl"></i>
                Savings
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/profile"
                className={
                  currLink === "/profile" ? activeClasses : normalClasses
                }
              >
                <i class="fas fa-user-circle text-2xl"></i>
                Profile
              </Link>
            </li>
            <li className="w-full">
              <button onClick={LogoutHandler} className={normalClasses}>
                <i class="fas fa-lock text-2xl"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="flex-1 h-auto">{children}</div>
    </div>
  );
};
