import React, { Component } from "react";
import Card from "./common/card";
import Rating from "./common/rating";
import { getProducts } from "../services/productServices";

class Products extends Component {
  state = {
    products: [],
  };

  cardBody = (product) => [
    {
      className: "card-element card-title",
      data: product.productName,
    },
    {
      className: "card-element highlighted",
      data: "$" + this.calculateNewPrice(product.price, product.discount),
    },
    {
      className: "card-element non-highlighted",
      data: "$" + product.price.toFixed(2),
    },
    {
      className: "card-element",
      data: <Rating rating={product.rating} />,
    },
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
        <div className="row">
          {products.map((product) => (
            <Card
              cardImageURL={"https://picsum.photos/500/500"}
              cardBody={this.cardBody(product)}
              badgeValue={product.discount + "%off"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
