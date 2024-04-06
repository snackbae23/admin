import React from 'react'
import Navbar from '../components/Navbar'

const Admin = () => {

    // <demo Request array
    const data = [
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },
        {
            "BrandName": "Foodoos ",
            "Email": "iamnitishsah@gmail.com",
            "ContectNumber": "+91 9660066979",
            "DateRequested": "06/04/2024",

        },




    ]
    return (

        <div className='w-full h-fit bg-[rgba(246,248,255,1)]'>
            <Navbar />
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
                            <p className='mt-2 ml-2  font-medium text-[.9rem]'>Today transaction count</p>
                            <p className='ml-2 mt-5 text-[1.3rem] font-bold '>1500</p>
                        </div>
                        <div className='bg-white  w-[24%] h-full flex flex-col rounded-lg'>
                            <div className='flex p-2  font-medium text-[.9rem] justify-between'>
                                <p className=''>Total Gateway fee </p>
                                <p className='text-slate-400'>Last 30 Days</p>
                            </div>

                            <p className='ml-2 mt-4 text-[1.3rem] font-bold '>₹234567</p>
                        </div>
                        <div className='bg-white  w-[24%] h-full flex flex-col rounded-lg'>
                            <p className='mt-2 ml-2  font-medium text-[.9rem]'>Today transaction Volume </p>
                            <p className='ml-2 mt-5 text-[1.3rem] font-bold '>₹1456000.00</p>
                        </div>
                        <div className='bg-white  w-[24%] h-full flex flex-col rounded-lg'>
                            <p className='mt-2 ml-2  font-medium text-[.9rem]'>Total Due Payout Balance</p>
                            <p className='ml-2 mt-5 text-[1.3rem] font-bold '>₹150000.00</p>
                        </div>
                    </div>
                </div>

                {/* Latest transaction */}
                <div className='flex justify-between w-[80%] mt-9 font-bold text-[1.3rem]'>
                    <div>
                        <p>Latest Transaction</p>
                        <p className='font-medium text-[.9rem] text-slate-400'>This is a list of latest transactions</p>
                    </div>

                    <button>View all</button>
                </div>

                <div className='w-[80%] h-[400px] bg-red-400 mt-9 rounded-md shadow-2xl '>


                </div>

                {/* demo request  */}

                <div className='flex flex-col w-[80%] h-[500px]  mt-9 '>
                    <p className='font-bold text-[1.3rem]'>Demo Request</p>
                    <div className='w-full px-4 bg-white mt-6 rounded-t  py-4 text-[1.1rem] flex justify-between font-semibold'>
                        <th className="w-[35%] flex justify-start ml-4 ">Brand Name</th>
                        <div className='flex justify-between w-[65%] '>
                            <th className="ml-14">Email</th>
                            <th className="ml-16">Customer Number</th>
                            <th className="mr-5">Date Requested</th>
                        </div>

                    </div>

                    <div className='w-full h-[450px] bg-white p-4   rounded-xl overflow-y-scroll '>


                        {data.map((reservation, index) => (
                            <tr className='w-full px-4  py-2 text-[1rem] flex justify-between border-b-2' key={index}>
                                <td className="w-[35%] flex justify-start ">{reservation.BrandName}</td>
                                <div className='flex justify-between w-[65%]'>
                                    <td className="">{reservation.Email}</td>
                                    <td className="">{reservation.ContectNumber}</td>
                                    <td className="">{reservation.DateRequested}</td>
                                </div>


                            </tr>
                        ))}

                    </div>

                </div>




            </div>

        </div>
    )
}

export default Admin