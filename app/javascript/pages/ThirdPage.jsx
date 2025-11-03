import React from "react";
import ReviewCard from "../components/ReviewCard";
import Button from "../components/Button";


const ThirdPage = ({rating, reviewsProp, company, icon}) => {
  const reviews = [
    {
      portrait: "https://img.freepik.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg?semt=ais_hybrid&w=740&q=80",
      logo: "https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg",
      name: "Jaydon Press",
      date: "Sep 25, 2025",
      rating: 5,
      review:
        "I'm located in another state and have had GreenPal care for my lawn while it is on the market. They are responsive and timely. Plus the price is very reasonable. I appreciate their professionalism and attention to details. I highly recommend greenpal.",
    },
    {
      portrait: "https://img.freepik.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg?semt=ais_hybrid&w=740&q=80",
      logo: "https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg",
      name: "Liam Carter",
      date: "Oct 1, 2025",
      rating: 4,
      review:
        "I'm located in another state and have had GreenPal care for my lawn while it is on the market. They are responsive and timely. Plus the price is very reasonable. I appreciate their professionalism and attention to details. I highly recommend greenpal.",
    },
    {
      portrait: "https://img.freepik.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg?semt=ais_hybrid&w=740&q=80",
      logo: "https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg",
      name: "Sophia Lee",
      date: "Oct 5, 2025",
      rating: 5,
      review:
        "I'm located in another state and have had GreenPal care for my lawn while it is on the market. They are responsive and timely. Plus the price is very reasonable. I appreciate their professionalism and attention to details. I highly recommend greenpal.",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center py-10 px-4 bg-[#F5F5F5]">
      {/* Google Rating Header */}
      <div className="mb-2 flex justify-start sm:justify-center items-center gap-1 w-full">
        <img className="w-10 h-10 " src={icon && icon} alt="" />
        <p className="text-[#3F3F3F] text-xl font-semibold">
          {company} <span className="font-extrabold text-lg text-black">{rating}</span> 
          <span className="font-normal text-base text-[#2b2b2b] pl-2">({reviewsProp}{' '}reviews)</span>
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-row overflow-x-auto gap-4 sm:gap-6
       justify-start sm:justify-center items-center w-full py-4 ">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

      {/* Button */}
      <Button text="Show all 2,848 reviews" />
    </div>
  );
};

export default ThirdPage;