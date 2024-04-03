import React from 'react'
import Navbar from '../components/Navbar'

const Admin = () => {
  return (
    <div className='w-full h-fit bg-[rgba(246,248,255,1)]'>
    <Navbar/>
    {/* main pages */}
    <div className='w-full flex flex-col items-center'>
        <h1 className='font-bold mt-9 text-[2rem]'>Admin Dashboard</h1>
        <div className='flex flex-col mt-9 px-1  w-[80%] h-[200px] gap-4'>
            <div className='flex h-[45%] w-full gap-3 justify-evenly'>
               
                <div className='bg-white  w-[20%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Total Merchant Count</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>150</p>
                </div>
                <div className='bg-white  w-[20%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Paid Merchant Count</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>110</p>
                </div>
                <div className='bg-white  w-[20%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Free Merchant</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>50</p>
                </div>
                <div className='bg-white  w-[20%] h-full flex flex-col rounded-lg'>
                    <div className='flex p-2  font-medium text-[.9rem] justify-between'>
                    <p className=''>Demo Request</p>
                    <p className='text-slate-400'>Last 30 Days</p>
                    </div>

                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>14</p>
                </div>
                <div className='bg-white  w-[20%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Total User Count</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>1500</p>
                </div>
               
                

            </div>
            <div className='flex h-[45%] w-full gap-3 justify-evenly'>
            <div className='bg-white  w-[24%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Total User Count</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>1500</p>
                </div>
                <div className='bg-white  w-[20%] h-full flex flex-col rounded-lg'>
                    <div className='flex p-2  font-medium text-[.9rem] justify-between'>
                    <p className=''>Demo Request</p>
                    <p className='text-slate-400'>Last 30 Days</p>
                    </div>

                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>234567</p>
                </div>
                <div className='bg-white  w-[24%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Total User Count</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>1456000.00</p>
                </div>
                <div className='bg-white  w-[24%] h-full flex flex-col rounded-lg'>
                    <p className='mt-2 ml-2  font-medium text-[.9rem]'>Total User Count</p>
                    <p className='ml-2 mt-5 text-[1.3rem] font-bold '>150000.00</p>
                </div>
            </div>
        </div>

        {/* Latest transaction */}
        <div>

        </div>

      
    </div>
    
    </div>
  )
}

export default Admin