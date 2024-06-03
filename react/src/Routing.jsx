import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDashboard from "./components/LoginDashboard/LoginDashboard";
import AddEvent from "./components/addEvent/addEvent";
// import Home from "./pages/HomePage";
import EditEvent from "./components/editEvent/editEvent";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<LoginDashboard />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event" element={<EditEvent />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<WebRouting />);
