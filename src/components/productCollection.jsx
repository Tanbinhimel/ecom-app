import React, { Component } from "react";
import Rating from "./common/rating";
import Card from "./common/card";
import calculateNewPrice from "../utils";
import { generateRatingArray } from "../utils";

class ProductCollection extends Component {
  cardBadge = (product) => [
    {
      className: "badge badge-pill custom-badge",
      data: product.discount !== 0 ? product.discount + "%off" : null,
    },
  ];

  cardBody = (product) => [
    {
      className: "card-element card-title",
      data: product.productName,
    },
    {
      className: "card-element highlighted",
      data: "$" + calculateNewPrice(product),
    },
    {
      className: "card-element non-highlighted",
      data: product.discount !== 0 ? "$" + product.price.toFixed(2) : null,
    },
    {
      className: "card-element",
      data: <Rating ratingArray={generateRatingArray(product.rating)} />,
    },
  ];

  render() {
    const { products, onCardClick } = this.props;
    return (
      <div>
        <div className="row">
          {products.map((product) => (
            <Card
              cardImageURL={"https://picsum.photos/500/500"}
              cardBody={this.cardBody(product)}
              cardBadge={this.cardBadge(product)}
              onCardClick={() => onCardClick(product)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductCollection;
