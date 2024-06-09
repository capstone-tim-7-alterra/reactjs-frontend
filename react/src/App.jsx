import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EditProduct from "./components/EditManageProducts/EditProducts";
import ManageDashboardProducts from "./components/ManageDashboardProduct/ManageDashboardProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ManageDashboardProducts />} />
        <Route path="/editProduct" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
