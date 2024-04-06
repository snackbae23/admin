import React from 'react'
import Navbar from '../components/Navbar'
import { MdContentCopy } from "react-icons/md";

const UserProfile = () => {


  

  return (
    <div className='w-full h-fit flex flex-col gap-7 items-center bg-[rgba(246,248,255,1)]'>
      <Navbar />
      <h className='font-bold  text-[2rem]'>User Profile</h>
      <div className='w-[80%] h-[150px]  flex gap-3   '>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-black justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>₹ 214003.80</p>
          <p className='ml-8 text-[1.1rem]'>Total Spend</p>
        </div>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-slate-900 justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>214</p>
          <p className='ml-8 text-[1.1rem]'>Total visit</p>
        </div>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-slate-900 justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>140</p>
          <p className='ml-8 text-[1.1rem]'>Restaurant Recomended</p>
        </div>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-slate-900 justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>89</p>
          <p className='ml-8 text-[1.1rem]'>Dish Recomended</p>
        </div>

      </div>

      <div className='w-[80%] h-fit mb-9 bg-white rounded-md p-3 flex flex-col gap-2'>

        <div className='flex justify-between w-[90%] mx-auto mt-4'>
          <img src="/img.png" alt="" />
          <div className='flex flex-col w-[30%]'>
            <p className='text-[#020617] font-[700] text-[1.2rem] '>User Id</p>
            <div className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B] flex items-center justify-between px-3' >
<p>1sdfgh23</p>
<MdContentCopy />
            </div>
          </div>

        </div>

        <div className='w-[90%] mx-auto h-fit mt-9  '>
          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                User Name
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Nitish Kumar
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Contact Number
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                +91 9660066979
              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Whatsapp Number
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                +91 994590949
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                DOB
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
06-04-2003
              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Gender
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Male
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Email ID
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                iamnitishsah@gmail.com

              </p>
            </div>
          </div>

          
        </div>

      </div>

    </div>
  )
}

export default UserProfile