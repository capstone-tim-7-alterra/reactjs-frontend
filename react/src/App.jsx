import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import EditProduct from "./components/editProduct/editProduct";
// import NavbarProduct from "./components/navbarProduct/navbarProduct";

function App() {
  return (
    <Router>
      {/* <NavbarProduct /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editProduct" element={<EditProduct />} />
        <Route path="/heroSection" element={<HeroSection />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
