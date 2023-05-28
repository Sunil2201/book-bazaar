import React from "react";
import Star from "../Star/Star";
import "./Rating.css";

const Rating = ({ rating }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={i} filled />);
    }

    if (hasHalfStar) {
      stars.push(
        <Star key={filledStars} filled={false} hasHalfStar={hasHalfStar} />
      );
    }

    const remainingStars = MAX_STARS - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={filledStars + i + 1} filled={false} />);
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;
