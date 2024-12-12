import React from 'react'

const Navbar = () => {
  return (
    <div  className='w-full  h-auto flex flex-row bg-slate-500 justify-between px-8 items-center'  >
        <img width={'30px'}  src="wenagerlogo.jpeg" alt="ahaa" />
      <ul className='min-w-[50%] w-auto  flex flex-row justify-between  gap-2 text-[1.5vw]  '>
        <a href="#">home</a>
        <a href="#">About</a>
        <a href="#">contact</a>
        <a href="#">services</a>
        <a href="/entry">signin</a>
      </ul>
    </div>
  )
}

export default Navbar
