import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] bg-orange-500 overflow-hidden relative flex justify-center items-center'>
        <img src='/hero1.jpeg' className='absolute width-[80%] top-0 left-0 ' />
      <div className='w-auto left-2 h-auto absolute z-10 font-medium  flex justify-center flex-col text-white hover:text-black hover:bg-neutral-500  '>
        <h1 className='text-6xl px3 ' >WENAGER</h1>
        <h2  className='text-3xl px-4 '>mannage your social life with our web</h2>
      </div>
      
    </div>
  )
}

export default Hero
