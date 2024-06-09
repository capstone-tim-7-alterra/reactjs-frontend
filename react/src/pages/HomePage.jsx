import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/ManageDashboardProducts">DashboardProduct</Link>
      </div>
      <div>
        <Link to="/editProduct">Edit Product</Link>
      </div>
    </div>
  );
}
