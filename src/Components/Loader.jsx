import React from "react";

export const Loader = () => {
  return (
    <div className="w-full min-h-screen max-h-screen bg-gray-100 flex flex-col justify-center items-center z-0 relative">
      {/* overlay */}
      <div className="bg-blue-800 h-full w-full z-10 absolute"></div>
      {/* loader */}
      <div className="grid grid-cols-1 items-center place-items-center gap-2 z-20 absolute text-gray-50">
        <div className="animate-bounce">
          <img
            src="https://img.icons8.com/dotty/80/ffffff/rupee.png"
            alt="mrm logo"
          />
        </div>
        <p className="text-xl my-2">Calculating Your Finance ...</p>
      </div>
    </div>
  );
};
