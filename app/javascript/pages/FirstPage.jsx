import React from "react";

const FirstPage = () => {
  return (
    
      <div
        style={{
          backgroundImage: `url('https://www.loveyourlandscape.org/media/83441/grass-wtih-glow.jpg')`,
          backgroundBlendMode: "darken",
        }}
        className="w-full  pt-8 pb-12 text-center bg-no-repeat bg-center bg-cover bg-[#00000090]"
      >
        <div className="w-full p-0 sm:p-8 px-0 sm:px-20 flex justify-start items-center sm:items-start gap-8 flex-col">
          <h1
            className="w-[90%] sm:w-[60%] text-center sm:text-start text-5xl sm:text-6xl font-semibold
              sm:font-extrabold text-white leading-tight"
          >
            Lawn Care Service Reviews
          </h1>

          <p className="text-4xl w-[90%] text-center sm:text-start sm:w-[60%] break-normal text-white/90 ">
            Why <span className="font-extrabold  text-[#FF9000] px-1">
              3,476,819
            </span>{" "}
            homeowners trust GreenPal
          </p>

          <p className="text-2xl w-[80%] text-center sm:text-start break-normal text-gray-300 ">
            We make lawn care simple get multiple free quote, compare lawn care
            companies, and book with confidence
          </p>

          <div className="flex justify-between sm:justify-start mt-8 gap-0 sm:gap-6 w-full items-center px-4">
            <div className="flex flex-col justify-start items-center">
              <h3 className="font-bold text-white text-2xl sm:text-3xl font-mono">
                25,000+
              </h3>
              <p className="font-light text-gray-100 text-base sm:text-lg">
                Verified Reviews
              </p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <h3 className="font-bold text-white text-2xl sm:text-3xl font-mono">
                5,000+
              </h3>
              <p className="font-light text-gray-100 text-base sm:text-lg">
                Service Providers
              </p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <h3 className="font-bold text-white text-2xl sm:text-3xl font-mono">4.8</h3>
              <p className="font-light text-gray-100 text-base sm:text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default FirstPage;
