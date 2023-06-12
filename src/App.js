import React, { Component } from "react";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DetailedPage from "./components/DetailedPage";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products/:id" element={<DetailedPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
