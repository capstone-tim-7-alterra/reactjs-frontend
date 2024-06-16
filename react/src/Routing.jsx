import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDashboard from "./components/LoginDashboard/LoginDashboard";
import AddEvent from "./components/addEvent/addEvent";
// import Home from "./pages/HomePage";
import EditEvent from "./components/editEvent/editEvent";
import ModalAlamat from "./components/modalAlamat/modalAlamat";
// import EventError from "./components/eventError/eventError";
import TicketForm from "./components/ticketForm/ticketForm";
import ManageAdmin from "./components/manageAdmin/manageAdmin";
import AddAdmin from "./components/addAdmin/addAdmin";
import CategoryForm from "./components/categoryForm/categoryform";
import ImportForm from "./components/importForm/importForm";;

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<LoginDashboard />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event" element={<EditEvent />} />
          <Route path="/modal-alamat" element={<ModalAlamat />} />
          <Route path="/ticket-form" element={<TicketForm />} />
          <Route path="/manage-admin" element={<ManageAdmin />} />
          <Route path="/add-admin" element={<AddAdmin />} />
          <Route path="/category-form" element={<CategoryForm />} />
          <Route path="/import-form" element={<ImportForm />} />
          {/* <Route path="/event-error" element={<EventError />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<WebRouting />);
