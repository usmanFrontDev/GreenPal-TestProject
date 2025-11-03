import React from 'react'

const Button = ({text, className }) => {
  return (
    <button className={`mt-4 w-full sm:w-auto bg-transparent
     hover:bg-[#FF9000] text-[#FF9000] hover:text-white text-lg border border-[#FF9000] 
     font-bold py-3 px-12 rounded-full transition-all duration-300 ${className}`}>
      {text}
    </button>
  );
}

export default Button