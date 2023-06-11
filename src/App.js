import React, { Component } from "react";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
