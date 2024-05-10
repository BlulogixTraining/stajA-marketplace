import { useState } from "react";
import classes from "./RatingStarts.module.css";
import { FaStar } from "react-icons/fa";

const RatingStarts = ({ star, onChange, isWritable }) => {
  const [selectedRating, setSelectedRating] = useState(star);

  const handleStarClick = (clickedRating) => {
    if (isWritable) {
      setSelectedRating(clickedRating);
      onChange(clickedRating);
    }
  };

  return (
    <div className={classes.star}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;

        const filled =
          star !== null && star !== undefined && currentRating <= star;
        return (
          <FaStar
            key={index}
            className={classes.star}
            size={30}
            color={filled ? "#ffc107" : "#e4e5e9"}
            onClick={() => handleStarClick(currentRating)}
            style={{ cursor: isWritable ? "pointer" : "default" }}
          />
        );
      })}
    </div>
  );
};

export default RatingStarts;
