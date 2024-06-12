import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginDashboard from '../components/LoginDashboard/LoginDashboard';
import Dashboard from "../components/ManageDashboard/dashboard";
// import AddEvent from "../components/manageEvent/";
import ManageAdmin from "../components/manageAdmin/manageAdmin";
import ManageDashboardProduct from "../components/ManageDashboardProduct/ManageDashboardProduct";
export default function Routing() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginDashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/addEvent" element={<AddEvent />} /> */}
                    <Route path="/manageAdmin" element={<ManageAdmin />} />
                    <Route path="/manageProduct" element={<ManageDashboardProduct />} />
                </Routes>
            </div>
        </Router>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);