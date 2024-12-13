import React from 'react'
import { Outlet } from 'react-router'

const Entry = () => {
  return (
    <div className='flex flex-col justify-center  items-center w-full h-[100vh]' >
      <Outlet/>
        set your credentials
    </div>
  )
}

export default Entry
