import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  // renderElement() {}

  render() {
    const { cardImageURL, cardBody } = this.props;
    return (
      <div class="col my-2">
        <div className="card h-30 customCard">
          <img class="card-img-top" src={cardImageURL} alt="product image" />
          <div class="card-body">{cardBody.map((component) => component)}</div>
        </div>
      </div>
    );
  }
}

export default Card;
