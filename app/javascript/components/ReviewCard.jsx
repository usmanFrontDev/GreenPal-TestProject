import React from "react";


const ReviewCard = ({ portrait, logo, name, date, rating, review }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400 scale-125" : "text-gray-300 scale-125"}>
        ★
      </span>
    ));

  return (
    <div className="bg-white rounded-3xl shadow-md py-3 p-5 max-sm:min-w-[90%] w-[90%] sm:w-full max-w-sm flex flex-col justify-between
     transition-transform duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <img
          src={portrait}
          alt="portrait"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-base text-gray-500">{date}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3 text-yellow-400 text-lg flex items-center">
        {stars}
        <span className="text-gray-600 text-sm ml-2">({rating}/5)</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-lg sm:text-sm mt-3 leading-relaxed">{review}</p>

      {/* Logo */}
      <div className="mt-2 flex justify-start">
        <img src={logo} alt="logo" className="w-20 h-auto" />
      </div>
    </div>
  );
};

export default ReviewCard