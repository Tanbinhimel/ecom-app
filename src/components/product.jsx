import React, { Component } from "react";
import { getProduct } from "../services/productServices";
import Rating from "./common/rating";
import calculateNewPrice, { generateRatingArray } from "./../utils";

class Product extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const product = getProduct(match.params.id);
    this.setState({ product });
  }

  render() {
    const { productName, price, catagory, rating } = this.state.product;
    return (
      <div className="container container-fluid">
        <h1 className="display-3">{productName}</h1>
        <img src="https://picsum.photos/500/500" alt="" />
        <h1 className="display-3">{calculateNewPrice(this.state.product)}</h1>
        <h1 className="display-3">{price}</h1>
        <h1 className="display-3">{catagory}</h1>
        <h1 className="display-3">{rating}</h1>
        <del>
          <Rating ratingArray={generateRatingArray(rating)} />
        </del>
      </div>
    );
  }
}

export default Product;
