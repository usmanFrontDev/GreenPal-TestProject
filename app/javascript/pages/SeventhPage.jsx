import React from 'react'
import Button from '../components/Button'

const SeventhPage = () => {
  return (
    <div className='bg-gradient-to-b from-[#83BC40] to-[#48A242]
    w-full flex justify-center items-center flex-col gap-4 py-12'>
        <h2 className='text-white font-bold text-center text-4xl sm:text-5xl'>Get your free lawn mowing quotes</h2>
        <p className='text-white/80 font-normal text-center text-lg sm:text-2xl'>reviewed lawn care professionals in your city who want your business</p>
          <Button text="Get free quotes"
          className={"!bg-gradient-to-b from-[#FF9B01] to-[#FF7101] max-sm:!w-[70%] text-white"}
          />
    </div>
  )
}

export default SeventhPage