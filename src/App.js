import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/common/navbar";
import Login from "./components/login";
import Products from "./components/products";
import NotFound from "./components/not-found";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
