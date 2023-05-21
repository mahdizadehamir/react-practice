import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
      </div>
    );
  }
}
