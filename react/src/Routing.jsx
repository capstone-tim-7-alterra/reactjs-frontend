import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDashboard from "./components/LoginDashboard/LoginDashboard";
// import Home from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<LoginDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<WebRouting />);
