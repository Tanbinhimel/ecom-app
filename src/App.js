import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";
import "./App.css";
import Navbar from "./components/common/navbar";
import Login from "./components/login";
import Product from "./components/product";
import Products from "./components/products";
import NotFound from "./components/not-found";
import Cart from "./components/cart";
import getCart from "./services/cartServices";
import { saveCartItem } from "./services/cartServices";
import { getProduct } from "./services/productServices";

class App extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = getCart();
    this.setState({ cart });
  }

  handleItemAddToCart = (id) => {
    console.log(100, this.props);
    const product = getProduct(id);
    saveCartItem(product);

    const cart = getCart();
    this.setState({ cart });
    this.props.history.push("/cart");
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <Navbar cartLength={cart.length} />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/cart"
              render={(props) => <Cart {...props} cart={cart} />}
            />
            <Route
              path="/products/:id"
              render={(props) => (
                <Product
                  {...props}
                  onItemAddToCart={this.handleItemAddToCart}
                />
              )}
            />
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

export default withRouter(App);
