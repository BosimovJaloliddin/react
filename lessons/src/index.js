import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let root = ReactDOM.createRoot(document.getElementById("root"));

let arr = [
  { id: 1, name: "Ali1" },
  { id: 2, name: "Ali2" },
  { id: 3, name: "Ali3" },
  { id: 4, name: "Ali4" },
  { id: 5, name: "Ali5" },
  { id: 6, name: "Ali6" },
];

root.render(
  <React.StrictMode>
    {arr.map((value) => {
      return <App data={value} />;
    })}
  </React.StrictMode>
);
