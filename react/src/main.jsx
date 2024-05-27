import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// import LoginDashboard from "./components/LoginDashboard/LoginDashboard";
import Routing from "./Routing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Routing />
    {/* <LoginDashboard /> */}
  </React.StrictMode>
);
