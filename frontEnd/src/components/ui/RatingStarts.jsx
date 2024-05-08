import { useState } from "react";
import classes from "./RatingStarts.module.css";
import { FaStar } from "react-icons/fa";

const RatingStarts = ({ star }) => {
  const rating = Math.round(star);

  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < rating;
    return (
      <FaStar
        key={index}
        className={classes.star}
        size={35}
        color={filled ? "#ffc107" : "#e4e5e9"}
      />
    );
  });

  return <div className={classes.star}>{stars}</div>;
};

export default RatingStarts;
