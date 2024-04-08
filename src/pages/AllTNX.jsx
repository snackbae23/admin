import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const AllTNX = () => {
  const data = [{
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "₹23423.00",
    "Discount": "₹234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "₹23423.00",
    "Discount": "₹234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "₹23423.00",
    "Discount": "₹234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "₹3423.00",
    "Discount": "₹234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "₹23423.00",
    "Discount": "₹234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "complete",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "Cancelled",
    "Mode": "Upi",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Debit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },
  {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  }, {
    "Customer": "Nitish",
    "Id": "#Id238975",
    "Date": "Apr 23,2021",
    "Amount": "23423.00",
    "Discount": "234",
    "Status": "In Progress",
    "Mode": "Credit Cart",
    "Merchant": "Foodoos",
    "Id1": "1234565"
  },]

 
  
  const [itemsPerPage,setpage]=useState(10);
  const pageupdate= (e)=>{
   
    setpage(e.target.value);
  }
  useEffect(() => {
    if (itemsPerPage === undefined) { // Check if initial value
      pageupdate();
    }
   
  }, [itemsPerPage]);


  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [slicedData, setslicedData] = useState(data.slice(0, itemsPerPage)); // Sliced data for current page

  

  const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setslicedData(data.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <>
    <Navbar />
    <div className='w-full h-fit flex flex-col gap-7  items-center bg-[rgba(246,248,255,1)] '>
      
      <h className='font-bold  text-[2rem] mt-[100px]'>All Transactions</h>
      <div className='w-[80%] h-fit my- rounded-lg bg-white p-9   '>
        <div className='text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-bold' >
          <div className='w-[29%] mb-4'>
            <div className='flex text-center items-center'>Customer </div>
          </div>
          <div className='grid grid-cols-6 w-[80%] justify-between'>
            <div className='mr-'>DATE & TIME</div>
            <div className='ml-4'>AMOUNT</div>
            <div className=''>DISCOUNT</div>
            <div className='ml-7'>STATUS</div>
            <div className='ml-9'>MODE</div>
            <div className='ml-9'>Merchant</div>
          </div>
        </div>




        <div className='w-full h-fit '>
          {slicedData.map((item) => (
            <div key={item.Id} className='w-full flex my-2' >
              <div className='w-[25%] flex flex-col justify-center'>
                <p className='text-black font-bold text-[1.1rem]'> {item.Customer}</p>
                <p className='text-[#718096] text-[.9rem] font-semibold'>{item.Id}</p>
              </div>

              <div className='grid grid-cols-6 w-[80%]  ml-12 gap-  '>
                <p className='text-[#6B7280] flex items-center '>{item.Date}</p>
                <p className='text-[black] font-bold text-[1.1rem ] flex items-center'>{item.Amount}</p>
                <p className='text-[#004AAD] font-bold text-[1.1rem] text-center flex items-center  '>{item.Discount}</p>
                <p className={`rounded-3xl  w-full h-[70%]  text-center mt-2 flex items-center justify-center 
                                            ${item.Status === 'complete' ? 'bg-[#DEF7EC] text-green-700 ' :
                    item.Status === 'In Progress' ? 'bg-[#E1EFFE] text-[#7157f1]' :
                      item.Status === 'Cancelled' ? 'bg-[#FBD5D5] text-red-800' : ''
                  }`}
                >{item.Status}</p>
                <p className={`rounded-3xl   text-center flex mt-2 h-[70%] items-center justify-center  ml-6
                                            ${item.Mode === 'Upi' ? 'bg-[#DEF7EC] text-green-700' :
                    item.Mode === 'Debit Cart' ? 'bg-[#fbd9de] text-[#FD4A65]' :
                      item.Mode === 'Credit Cart' ? 'bg-[#E1EFFE] text-[#7157f1]' : ''
                  }`}>{item.Mode}</p>
                <div className=' flex flex-col items-center ml-7 '>
                  <p className='text-black font-bold text-[1.1rem] '>{item.Merchant}</p>
                  <p className='text-[#718096] text-[.9rem] font-semibold'>{item.Id1}</p>
                </div>

              </div>


              {/* Display other item properties */}
            </div>
          ))}
        </div>

        <div className='flex justify-between mt-9 w-full'>
          
          <div className='w-[50%]' >Showing {slicedData.length} out of {data.length} results.</div> 
          <div>
                                    <label>Show result:</label>
                                    <select
                                        className='ml-2'
                                        value={itemsPerPage}
                                        onChange={pageupdate}
                                    >
                                        {/* <option value={6}>6</option> */}
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={50}>50</option>
                                    </select>
                                </div>
          <div className='flex gap-5'>
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          <GrFormPrevious />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button  key={i + 1} className={currentPage === i + 1 ? 'active' : ''} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          <MdNavigateNext />
          </button>
          </div>
          
        </div>

</div>
    </div>
    </>
    
  )
}

export default AllTNX