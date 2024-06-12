import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginDashboard from '../components/LoginDashboard/LoginDashboard';
import Dashboard from "../components/ManageDashboard/dashboard";
import AddEvent from "../components/addEvent/addEvent";

export default function Routing() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginDashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addEvent" element={<AddEvent />} />
                </Routes>
            </div>
        </Router>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);