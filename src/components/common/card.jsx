import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  renderElement(element) {
    const { className, data } = element;
    return <p className={className}>{data}</p>;
  }

  render() {
    const { cardImageURL, cardBody, badgeValue } = this.props;
    return (
      <div class="col my-2">
        <div className="card">
          <div className="image">
            <img className="card-img-top" src={cardImageURL} />
            <span className="badge badge-pill badge1">{badgeValue}</span>
          </div>
          <div className="card-body">
            {cardBody.map((element) => this.renderElement(element))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
