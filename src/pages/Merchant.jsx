import React from 'react'
import Navbar from '../components/Navbar'
import { MdContentCopy } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { useState } from 'react';
import { CiLock } from "react-icons/ci";

const Merchant = () => {

  const [passworda, setpassword] = useState(true);
  const [switc,setswitch] =useState(false);

  const switch1 =()=>{
    setswitch(!switc);
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://snackbae.in/user/restaurant/`);
      // setCopied(true);
      console.log("Text copied to clipboard!");
    window.alert("Text copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy text:", err);}
    // } finally {
    //   setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    // }
  };

  const eye = () => {
    setpassword(!passworda);
  }
  return (
    <div className='w-full h-fit flex flex-col gap-7 items-center bg-[rgba(246,248,255,1)]'>
      <Navbar />
      <h className='font-bold  text-[2rem]'>Merchant Profile</h>
      <div className='w-[80%] h-[150px]  flex gap-3   '>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-black justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>₹ 214003.80</p>
          <p className='ml-8 text-[1.1rem]'>Total PAyout Balance</p>
        </div>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-slate-900 justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>₹ 16003.78</p>
          <p className='ml-8 text-[1.1rem]'>Monthly Collection</p>
        </div>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-slate-900 justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>₹ 198003.78</p>
          <p className='ml-8 text-[1.1rem]'>Life Time Collection</p>
        </div>
        <div className='w-[24%] h-full flex flex-col gap-5 border-2 border-slate-900 justify-center rounded-md '>
          <p className='mt-2 ml-8  font-medium text-[1.6rem]'>1092</p>
          <p className='ml-8 text-[1.1rem]'>Total Customer</p>
        </div>

      </div>

      {/* first form */}

      <div className='w-[80%] h-fit my-9 bg-white rounded-md p-3 flex flex-col gap-2'>

        <div className='flex justify-between w-[90%] mx-auto mt-4'>
          <img src="/image 148.png" alt="" />
          <div>

          </div>
          <div className='flex flex-col w-[30%] ml-16'>
            <p className='text-[#020617] font-[700] text-[1.2rem] '>Merchant Id</p>
            <div className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B] flex items-center justify-between px-3' >
              <p>1sdfgh23</p>
              <MdContentCopy className='' />
            </div>
          </div>
          <div className='flex flex-col w-[30%]'>
            <p className='text-[#020617] font-[700] text-[1.2rem] '>Url</p>
            <div className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B] flex items-center justify-between px-3' >
              <p>Merchant.snackbae.in/190802</p>
              <MdContentCopy onClick={handleCopy} />
            </div>
          </div>

        </div>

        <div className='w-[90%] mx-auto h-fit mt-9  '>

          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Business Name
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Reunion Cafe
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Email ID
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                iamnitishsah@gmail.col
              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Contact Person
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Sangit Saha
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
                Business type
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Restaurant
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Business Address
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Restaurant

              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Instagram Link
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Restaurant
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Cuisines served
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Indian  chinese

              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Password
              </p>
              <div className=' relative flex items-center'>
                <CiLock className='absolute ml-2 text-[1.2rem] mt-1' />
                {
                  passworda ? <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-8 mt-2 text-[#64748B] '>
                    ********

                  </p> : <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-8 mt-2 text-[#64748B] '>
                    Nitish@900

                  </p>
                }

                <div className=' cursor-pointer w-[5%] absolute right-2' onClick={eye}>
                  {
                    passworda ? <IoEyeOffSharp /> : <FaEye />
                  }

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>

      {/* second form */}

      <div className='w-[80%] h-fit mb-9 bg-white rounded-md p-3 flex flex-col gap-2'>

        <h1 className='text-[#020617] w-[90%] font-[700] text-[1.5rem] ml-12 mt-4 '>Payout Details</h1>
        <div className='w-[90%] mx-auto h-fit mt-4  '>
          <div className=' w-full flex justify-between gap-4 my-6'>

            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                UPI Id
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                abcd@ybl
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Upi Number
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                +91 9660066979
              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>

            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                UPI Name(Optional)
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Foodoos
              </p>
            </div>

          </div>



        </div>




      </div>

      {/* third form */}

      <div className='w-[80%] h-fit mb-9 bg-white rounded-md p-3 flex flex-col gap-2'>


        <div className='w-[90%] mx-auto h-fit mt-4  '>
          <div className=' w-full flex justify-between gap-4 my-6'>

            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Account Number
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                .
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                IFSC Code
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                .
              </p>
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>

            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Banking Name
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                .
              </p>
            </div>

          </div>



        </div>




      </div>

      {/* last form */}

      <div className='w-[80%] h-fit mb-9 bg-white rounded-md p-3 flex flex-col gap-2'>


        <div className='w-[90%] mx-auto h-fit mt-4  '>
          <div className=' w-full flex justify-between gap-4 my-6'>

            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Selected Plan
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                Paid(12 Months)
              </p>

            </div>
            <div className='w-[50%] flex justify-end items-center gap-4'>
              <p className=' font-[700] text-[.9rem] text-green-500 '>
                Account Active
              </p>

              {
                switc ?
                 <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                  <div className='size-[18px] bg-white rounded-full ml-1'onClick={switch1}></div>
                 </div>:
                 <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                 <div className='size-[18px] bg-white rounded-full ml-5'onClick={switch1}></div>
                </div>
              }
            </div>
          </div>

          <div className=' w-full flex justify-between gap-4 my-6'>

            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Starting Date
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                10-08-2024
              </p>
            </div>
            <div className='w-[50%]'>
              <p className='text-[#020617] font-[700] text-[1.2rem] '>
                Ending Date
              </p>
              <p className='w-full border-2 border-[#E2E8F0] rounded-md py-3 pl-3 mt-2 text-[#64748B]'>
                10-08-2025
              </p>
            </div>
          </div>

         



        </div>




      </div>

      <div className='w-[80%] h-fit mb-9 bg-[#F44336] text-white flex items-center justify-center cursor-pointer py-4 rounded-md text-[1.2rem]'>
                  Parmanently Delete Merchant
      </div>






    </div>

  )
}

export default Merchant