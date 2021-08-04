import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  renderElement(element) {
    const { className, data } = element;
    return <p className={className}>{data}</p>;
  }

  render() {
    const { cardImageURL, cardBadge, cardBody, onCardClick } = this.props;
    return (
      <div class="col">
        <div className="card my-2" onClick={onCardClick}>
          <div className="card-image">
            <img className="card-img-top" src={cardImageURL} alt="" />
          </div>
          <div className="card-badge">
            {cardBadge.map((element) => this.renderElement(element))}
          </div>
          <div className="container container-fluid card-body">
            {cardBody.map((element) => this.renderElement(element))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
