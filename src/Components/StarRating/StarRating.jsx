import React from "react";

const StarRating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, idx) => (
        <span
          key={idx}
          className={`text-xl ${
            idx < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-xs font-bold rounded-full bg-gray-100 px-3 py-1 text-gray-600">
        {rating}
      </span>
    </div>
  );
};

export default StarRating;
