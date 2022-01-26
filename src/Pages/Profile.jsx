import React from "react";
import { BackBtn } from "../Components/BackBtn";
import { Layout } from "../Components/Layout";

export const Profile = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 p-2 py-4">
        <BackBtn />
        {/* profile picture */}
        <div className="my-2 flex justify-center">
          <i
            class="fa fa-user-circle text-8xl text-gray-700"
            aria-hidden="true"
          ></i>
        </div>
        <p className="text-base text-gray-600 px-4 py-2">
          The Following information is secured with us and all your finance date
          too is well protected.
        </p>
        {/* info */}
        <div className="grid grid-cols-2 my-1 mx-1 p-4">
          <div className="grid grid-cols-1 gap-y-4">
            <p className="text-lg text-gray-700">Name</p>
            <p className="text-lg text-gray-700">Email</p>
            <p className="text-lg text-gray-700">Joined On</p>
          </div>
          <div className="grid grid-cols-1 gap-y-4">
            <p className="text-lg text-gray-800 font-medium">John Doe</p>
            <p className="text-lg text-gray-800 font-medium">
              johndoe123@gmail.com
            </p>
            <p className="text-lg text-gray-800 font-medium">
              1st January 2022
            </p>
          </div>
        </div>
        {/* log out button */}
        <button
          type="button"
          className="px-3 py-1 border border-blue-800 rounded-md m-3 text-lg font-medium transition-all hover:text-gray-100 hover:shadow-lg hover:bg-blue-800"
        >
          Logout
        </button>
        <hr className="border border-gray-500 m-4" />
        {/* delete button */}
        <p className="text-base text-gray-600 px-4 py-2">
          Deleting your account will remove all your secured data from us. Are
          you sure ?
        </p>
        <button
          type="button"
          className="px-3 py-1 border border-red-800 rounded-md mx-3 my-1 text-lg font-medium transition-all hover:text-gray-100 hover:shadow-lg hover:bg-red-800"
        >
          Delete Account
        </button>
      </div>
    </Layout>
  );
};
