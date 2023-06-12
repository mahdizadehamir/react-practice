import React, { Component } from "react";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DetailedPage from "./components/DetailedPage";
import NotFound from "./components/NotFound";
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
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
