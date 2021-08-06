import React from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";

const Star = ({ type }) => {
  if (type === "solid") {
    return <StarRoundedIcon fontSize="small" />;
  } else if (type === "half-solid") {
    return <StarHalfRoundedIcon fontSize="small" />;
  } else {
    return <StarBorderRoundedIcon fontSize="small" />;
  }
};

export default Star;
