import React, { Component } from "react";
import Card from "./common/card";
import { getProducts } from "../services/productServices";

class Products extends Component {
  state = {
    products: [],
  };

  cardBody = (product) => [
    <p className="card-element card-title">{product.productName}</p>,
    <p className="card-element highlighted">
      ${this.calculateNewPrice(product.price, product.discount)}
    </p>,
    <p className="card-element non-highlighted">
      <del>${product.price.toFixed(2)}</del>
    </p>,
  ];

  componentDidMount() {
    const products = getProducts();
    this.setState({ products });
  }

  calculateNewPrice(price, discount) {
    const discountAmount = (price * discount) / 100;
    return (price - discountAmount).toFixed(2);
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>products</h1>
        <div className="row">
          {products.map((product) => (
            <Card
              cardImageURL={"https://picsum.photos/500/500"}
              cardBody={this.cardBody(product)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
