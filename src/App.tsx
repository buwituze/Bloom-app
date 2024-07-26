import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Signup from "./components/signup";
import AllProducts from "./components/allproducts";
import BookingProducts from "./components/bookingpdts";
import Fertilizers from "./components/fertilizers";
import Seeds from "./components/seeds";
import Pesticides from "./components/pesticides";
import FarmingTools from "./components/farmingtools";
import IrrigationTools from "./components/irrigationtools";
import TestKits from "./components/testkits";
import FarmProduce from "./components/farmproduce";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/bookingpdts" element={<BookingProducts />} />
        <Route path="/fertilizers" element={<Fertilizers />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/pesticides" element={<Pesticides />} />
        <Route path="/farmingtools" element={<FarmingTools />} />
        <Route path="/irrigationtools" element={<IrrigationTools />} />
        <Route path="/testkits" element={<TestKits />} />
        <Route path="/farmproduce" element={<FarmProduce />} />
      </Routes>
    </Router>
  );
}

export default App;
