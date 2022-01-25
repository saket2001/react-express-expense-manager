import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="min-w-screen min-h-screen grid grid-cols-1 place-items-center bg">
        <div className="w-full h-full lg:w-2/6 flex flex-col justify-center items-center">
          <App />
        </div>
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
