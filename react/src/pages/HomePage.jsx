import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/editProduct">Edit Product</Link>
      </div>
      <div>
        <Link to="/heroSection">Hero Section</Link>
      </div>
      <div>
        <Link to="/footer">Footer</Link>
      </div>
    </div>
  );
}
