import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let root = ReactDOM.createRoot(document.getElementById("root"));

let students = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Ali" },
  { id: 4, name: "Ali" },
  { id: 5, name: "Ali" },
];

root.render(
  <React.StrictMode>
    {students.map((value) => {
      return <App data={value} />;
    })}
  </React.StrictMode>
);
