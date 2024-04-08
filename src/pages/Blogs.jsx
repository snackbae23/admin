import React from 'react'
import Navbar from '../components/Navbar'

const Blogs = () => {

  const data = [{
    "Header": "Best Cafe in Salt Lake",
    "Body": "Unlock the potential of artificial intelligence to streamline your content creation process and engage your audience like never before. Get ready to discover a smarter way to write and transform your ideas into captivating posts effortlessly.",
    "image": "Rectangle 17.png"
  }, {
    "Header": "Foodoos-Reunion Cafe",
    "Body": "Unlock the potential of artificial intelligence to streamline your content creation process and engage your audience like never before. Get ready to discover a smarter way to write and transform your ideas into captivating posts effortlessly.",
    "image": ""
  }, {
    "Header": "Chowman-Salt Lake",
    "Body": "Unlock the potential of artificial intelligence to streamline your content creation process and engage your audience like never before. Get ready to discover a smarter way to write and transform your ideas into captivating posts effortlessly.",
    "image": "Rectangle 17.png"
  },]

  return (
    <div className='w-full h-fit bg-[rgba(246,248,255,1)]'>

      <Navbar />
      <div className='w-full flex flex-col items-center'>
        <p className='font-bold  text-[2rem] mt-[100px]'>Add/Edit Blog</p>

        <div className='flex flex-col mt-9 p-5  w-[80%] h-fit gap-4 bg-white mb-9 '>

          {data.map((item) => (
            <div key={item.Id} className='w-full flex flex-col gap-3 mb-4  ml-7 mt-2 ' >
              <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg '>
                <p className='font-bold text-black text-[1.1rem]' >H</p>
                <p className='font-semibold text-[#999999]'>Header</p>
              </div>

              <p className='text-black font-bold text-[2rem] '>{item.Header}</p>

              <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg'>
                <p className='font-bold text-black text-[1.1rem]' >B</p>
                <p className='font-semibold text-[#999999]'>Body</p>
              </div>
              <p className='w-[70%]'>{item.Body}</p>

              {
                item.image && <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg '>
                <p className='font-bold text-black text-[1.1rem]' >B</p>
                <p className='font-semibold text-[#999999]'>Image</p>
              </div>
                  
                  <img className='w-[160px] h-[100px]' src={item.image} alt="" />
                  </div>
              }


            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs