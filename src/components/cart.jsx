import React, { Component } from "react";

class Cart extends Component {
  state = {
    cartItem: [],
    };
    
    componentDidMount() {
        
    }
  render() {
    const { cartItem } = this.state;
    return cartItem.map((item) => <h1>{item}</h1>);
  }
}

export default Cart;
<h1>cart</h1>;
