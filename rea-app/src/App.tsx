import React from "react";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductListingPage from "./components/ProductListingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-list" element={<ProductListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
