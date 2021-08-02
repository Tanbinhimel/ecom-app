import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    return (
      <div class="col my-2">
        <div className="card h-30 customCard">
          <img
            class="card-img-top"
            src="https://picsum.photos/1000/1000"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-element card-title">Card title</p>
            <p class="card-element">current price</p>
            <p class="card-element">old price</p>
            <p class="card-element">rating</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
