import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/common/navbar";
import Login from "./components/login";
import Product from "./components/product";
import Products from "./components/products";
import NotFound from "./components/not-found";
import Cart from "./components/cart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/products/:id" component={Product} />
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
