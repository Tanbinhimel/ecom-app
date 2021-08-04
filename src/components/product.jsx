import React, { Component } from "react";
import { getProduct } from "../services/productServices";
import Rating from "./common/rating";
import calculateNewPrice, { generateRatingArray } from "./../utils";

class Product extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    console.log(this.props);
    const { match } = this.props;
    const product = getProduct(match.params.id);
    this.setState({ product });
  }

  render() {
    const { onItemAddToCart } = this.props;
    const { _id, productName, price, catagory, rating, productDescription } =
      this.state.product;
    return (
      <div className="container container-fluid">
        <img className="m-2" src="https://picsum.photos/500/500" alt="" />
        <h1 className="display-3">{productName}</h1>
        <p className="">{productDescription}</p>
        <p className="">{catagory}</p>
        <div className="row">
          <div className="col">
            <p className="">${calculateNewPrice(this.state.product)}</p>
            <del>
              <p className="">${price}</p>
            </del>
          </div>
          <div className="col">
            <Rating ratingArray={generateRatingArray(rating)} />
          </div>
        </div>
        <button
          onClick={() => onItemAddToCart(_id)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
