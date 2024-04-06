import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full h-[70px] flex justify-between bg-white items-center px-9'>
      <img className='h-[70px] w-[117px]  object-cover' src='/IMG-20231226-WA0003 2.png'></img>
      <div className=' flex relative items-center bg-[rgba(246,248,255,1)] font-semibold px-9 py-3 text-[1.3rem] rounded-full text-slate-500 gap-3'>
        <IoLogOutOutline className='text-[2rem]' />
        <button className=''>Log Out</button>
      </div>


    </div>
  )
}

export default Navbar