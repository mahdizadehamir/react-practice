import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Cards />
        <Search />
        <Logos />
        <Footer />
      </div>
    );
  }
}
