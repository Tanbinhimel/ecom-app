import React from "react";
import Star from "./star";

const Rating = ({ ratingArray }) => {
  return ratingArray.map((type) => <Star type={type} />);
};

export default Rating;
