"use client";
import React, { useState } from "react";
import { IconSvgProps } from "@/types";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  totalStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  size?: number;
}

const Rating: React.FC<RatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
  size = 24,
  className,
  style,
  ...props
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={`flex ${className || ""}`} style={style} {...props}>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          filled={index < (hoverRating || rating)}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          size={size}
        />
      ))}
    </div>
  );
};

interface StarProps extends IconSvgProps {
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Star: React.FC<StarProps> = ({
  size = 24,
  height,
  width,
  filled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  style,
  ...props
}) => {
  return (
    <svg
      className={`cursor-pointer ${
        filled ? "text-yellow-500" : "text-gray-300"
      } ${className || ""}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      height={size || height}
      width={size || width}
      style={style}
      {...props}
    >
      <path d="M12 .587l3.668 7.431 8.2 1.174-5.933 5.768 1.4 8.175L12 18.896l-7.335 3.863 1.4-8.175L.132 9.192l8.2-1.174L12 .587z" />
    </svg>
  );
};

export default Rating;
