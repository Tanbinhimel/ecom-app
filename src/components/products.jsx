import React, { Component } from "react";
import { getProducts } from "../services/productServices";
import ProductCollection from "./productCollection";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const products = getProducts();
    this.setState({ products });
  }

  handleCardClick = (product) => {
    this.props.history.push(`/products/${product._id}`);
    console.log(product);
  };

  render() {
    const { products } = this.state;
    return (
      <ProductCollection
        products={products}
        onCardClick={this.handleCardClick}
      />
    );
  }
}

export default Products;
