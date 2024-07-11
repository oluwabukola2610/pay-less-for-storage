import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BusinessPage from "./components/pages/BusinessPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
