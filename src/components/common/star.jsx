import React, { Component } from "react";

class Star extends Component {
  render() {
    const { type } = this.props;
    if (type === "solid") {
      return <i class="fa fa-star" aria-hidden="true" />;
    } else if (type === "half-solid") {
      return <i class="fa fa-star-half-o" aria-hidden="true" />;
    } else {
      return <i class="fa fa-star-o" aria-hidden="true" />;
    }
  }
}

export default Star;
