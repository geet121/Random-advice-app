import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>   this will re-render the component an extra time to find bugs caused by impure rendering.components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.Your components will be checked for usage of deprecated APIs.
  //     <App />
  //   </React.StrictMode>

  <App />
);
