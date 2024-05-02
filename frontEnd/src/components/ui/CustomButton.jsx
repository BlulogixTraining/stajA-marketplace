import React, { useState } from "react";

const CustomButton = ({ width, height, color, title, style, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };
  const buttonStyle = {
    width: width || "auto",
    height: height || "auto",
    backgroundColor: isActive ? "black" : color || "gray",
    color: isActive ? "white" : "black",
    ...style,
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
