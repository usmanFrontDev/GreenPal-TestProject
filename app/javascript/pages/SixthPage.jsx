import React from "react";
import Button from "../components/Button";

const SixthPage = () => {


const array = [
    {
        head: "Your Lawn, Your Way",
        para: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          repellendus culpa impedit quisquam consectetur expedita unde tempore
          eos officiis mollitia, dolorem ut distinctio placeat alias quas
          laudantium atque nostrum sequi`
    },
    {
        head: "Real Results, You Can See",
        para: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          repellendus culpa impedit quisquam consectetur expedita unde tempore
          eos officiis mollitia, dolorem ut distinctio placeat alias quas
          laudantium atque nostrum sequi culpa impedit quisquam consectetur expedita unde tempore
          eos officiis mollitia, dolorem ut distinctio placeat alias quas
          laudantium atque nostrum sequi`
    },
     {
        head: "Recognized & Respected",
        para: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          repellendus culpa impedit quisquam consectetur expedita unde tempore
          eos officiis mollitia, dolorem ut distinctio placeat alias quas
          laudantium atque nostrum sequi`
    },
]


    
  return (
    <div className="w-full bg-[#E5F6FD] py-12 px-6 flex flex-col justify-start gap-6 sm:gap-8 items-center">
      <h1 className="text-[#373737] font-bold text-center text-4xl sm:text-5xl">
        Why Homeowners Choose GreenPal
      </h1>
      <p className="text-[#434445] font-normal text-center text-lg sm:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta
        unde sapiente nisi necessitatibus cumque dolorum? Sequi aliquid,
        sapiente quam quisquam recusandae commodi natus nihil sed dolores nisi
        explicabo. Est,
      </p>
      <div className="w-full h-auto overflow-hidden rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src="https://png.pngtree.com/background/20250110/original/pngtree-a-lawn-mower-working-across-fresh-grass-to-keep-the-yard-picture-image_16104269.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold sm:text-center text-2xl text-[#373737]">Your Lawn, Your Way</h3>
        <p className="text-[#434445] font-normal sm:text-center text-lg sm:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          repellendus culpa impedit quisquam consectetur expedita unde tempore
          eos officiis mollitia, dolorem ut distinctio placeat alias quas
          laudantium atque nostrum sequi 
        </p>
      </div>
      <div className="w-full flex justify-center items-center bg-transparent py-6 -mt-16
      backdrop-blur-sm">
         <Button text="Show all 2,348 reviews" />
      </div>
    </div>
  );
};

export default SixthPage;
