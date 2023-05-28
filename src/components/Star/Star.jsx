import React from "react";

const Star = ({ filled, hasHalfStar }) => {
  return (
    <span
      className={filled ? "star filled" : hasHalfStar ? "star half" : "star"}
    >
      &#9733;
    </span>
  );
};

export default Star;
