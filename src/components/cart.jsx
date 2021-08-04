import React, { Component } from "react";
import getCart from "./../services/cartServices";

class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = getCart();
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;

    return (
      <div>
        <div className="display-2">
          cart
          <span className="badge badge-pill badge-primary small">
            {cart.length}
          </span>
        </div>

        {cart.map((product) => (
          <div className="row">
            <div className="col">
              <p className="">{product.productName}</p>
            </div>
            <div className="col">
              <p className="">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
