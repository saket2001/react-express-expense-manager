import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-w-screen min-h-screen grid grid-cols-1 place-items-center bg overflow-hidden">
          <div className="w-full h-full lg:w-2/6 flex flex-col justify-center items-center">
            <App />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
