import { useState } from "react";
import classes from "./RatingStarts.module.css";
import { FaStar } from "react-icons/fa";

const RatingStarts = ({ star, onChange, isWritable }) => {
  const [selectedRating, setSelectedRating] = useState(star);

  const handleStarClick = (clickedRating) => {
    if (isWritable) {
      setSelectedRating(clickedRating); // Update selected rating when a star is clicked
      onChange(clickedRating); // Call the onChange function with the new rating
    }
  };

  return (
    <div className={classes.star}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        const filled = currentRating <= selectedRating;
        return (
          <FaStar
            key={index}
            className={classes.star}
            size={35}
            color={filled ? "#ffc107" : "#e4e5e9"}
            onClick={() => handleStarClick(currentRating)} // Call handleStarClick when a star is clicked
            style={{ cursor: isWritable ? "pointer" : "default" }} // Change cursor style based on isWritable prop
          />
        );
      })}
    </div>
  );
};

export default RatingStarts;
