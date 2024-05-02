import { useState } from "react";
import classes from "./RatingStarts.module.css";
import { FaStar } from "react-icons/fa";

const RatingStarts = ({ star }) => {
  const [rating, setRating] = useState(star || null);
  const [hover, setHover] = useState(null);

  return (
    <div className={classes.star}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className={classes.star}
              size={35}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              // onMouseEnter={() => setHover(currentRating)}
              // onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStarts;
