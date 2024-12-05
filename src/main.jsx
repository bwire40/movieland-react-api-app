import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";

let el = document.getElementById("root"); //select root element
let root = createRoot(el); //create root

// render app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
