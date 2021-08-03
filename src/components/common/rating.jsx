import React, { Component } from "react";
import Star from "./star";

class Rating extends Component {
  state = {
    ratingArray: [],
  };

  componentDidMount() {
    let { rating } = this.props;
    let ratingArray = [];
    for (let i = 0; i < 5; i++) {
      let type = "empty";
      if (rating >= 1) {
        type = "solid";
      } else if (rating > 0) {
        type = "half-solid";
      }
      rating -= 1;
      ratingArray.push(<Star type={type} />);
    }
    this.setState({ ratingArray });
  }

  render() {
    const { ratingArray } = this.state;
    return <div>{ratingArray.map((star) => star)}</div>;
  }
}
export default Rating;
