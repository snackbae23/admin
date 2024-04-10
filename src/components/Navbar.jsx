import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-[70px] z-10 flex justify-between bg-white items-center px-9 fixed'>
      <Link to='/admin'><img className='h-[70px] w-[117px]  object-cover' src='/IMG-20231226-WA0003 2.png'></img></Link>
      
      
      <Link to='/' className=' flex relative items-center bg-[rgba(246,248,255,1)] font-semibold px-7 py-[.5rem] text-[1.3rem] rounded-full text-slate-500 gap-3'>
        <IoLogOutOutline className='text-[2rem]' />
        <button className=''>Log Out</button>
      </Link>


    </div>
  )
}

export default Navbar