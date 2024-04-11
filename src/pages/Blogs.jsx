import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FaImage } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

const Blogs = () => {
  const [count, setcount] = useState(0);

  const siftnext = () => {

    console.log(count);
    if (count == 0) header1();
    if (count == 1) image1();
    if (count == 2) body1();
    if (count == 3) link1();
    setcount(count + 1);
    if (count == 3) setcount(0);
  }

  const header1 = () => {
    setHead(true)
    setImage(false)
    setBody(false)
    setLink(false)
  }
  const image1 = () => {
    setHead(false)
    setImage(true)
    setBody(false)
    setLink(false)
  }
  const body1 = () => {
    setHead(false)
    setImage(false)
    setBody(true)
    setLink(false)
  }
  const link1 = () => {
    setHead(false)
    setImage(false)
    setBody(false)
    setLink(true)
  }

  const [head, setHead] = useState(true)
  const [image, setImage] = useState(false)
  const [body, setBody] = useState(false)
  const [link, setLink] = useState(false)

  const [formData, setFormData] = useState({
    header: '',
    image: '',
    body: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form data submitted:', formData);
  };

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
    <div className='w-full min-h-[100vh] h-fit bg-[rgba(246,248,255,1)] relative '>
      <Navbar />
      <div className='w-full h-fit'>
        <div className='w-full flex flex-col items-center'>
          <p className='font-bold  text-[2rem] mt-[100px]'>Add/Edit Blog</p>
          <div className='flex flex-col mt-9 p-5  w-[80%] h-fit gap-4 bg-white mb-9 '>

            {/* latest Blogs */}
            <div className='w-full flex flex-col gap-3   ml-7 mt-2 mb-36 '>
              {
                formData.header && <p className='font-bold
                '>Latest blogs </p>
              }
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg '>
                  <p className='font-bold text-black text-[1.1rem]' >H</p>
                  <p className='font-semibold text-[#999999]'>Header</p>
                </div>
                {formData.header &&
                  <p className='text-black font-bold text-[2rem]'>{formData?.header}</p>
                }
              </div>
              {

                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg mt-5'>
                    <p className='font-bold text-black text-[1.1rem]' >B</p>
                    <p className='font-semibold text-[#999999]'>Body</p>
                  </div>
                  {formData.body &&
                    <p className='w-[70%]'>{formData?.body}</p>
                  }</div>
              }
              {

                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg mt-5'>
                    <p className='font-bold text-black text-[1.1rem]' >I</p>
                    <p className='font-semibold text-[#999999]'>Image</p>
                  </div>
                  {formData.image &&
                    <img className='w-[160px] h-[100px]' src={formData.image} alt="" />
                  }</div>
              }
              {

                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 bg-[#EEEEEE] w-fit px-3 rounded-lg mt-5'>
                    <p className='font-bold text-black text-[1.1rem]' >L</p>
                    <p className='font-semibold text-[#999999]'>Link</p>
                  </div>
                  {formData.link &&
                    <p className='w-[70%]'>{formData?.link}</p>
                  }</div>
              }


            </div>
            {/* old blogs */}
            {/* {data.map((item) => (
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
            ))} */}
          </div>


        </div>
      </div>
      <div className='bg-white w-[80%] h-fit fixed bottom-0 left-[50%] translate-x-[-50%] py-2 px-4 '>
        <div className='py-[.5rem] w-[30%] flex justify-between px-4 border-2 ml-4 '>
          <button
            onClick={
              () => {
                setHead(true)
                setImage(false)
                setBody(false)
                setLink(false)
              }
            } className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${head ? ('bg-[#EEEEEE]') : ('bg-none')}`}>H</button>
          <button
            onClick={
              () => {
                setHead(false)
                setImage(true)
                setBody(false)
                setLink(false)
              }
            } className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${image ? ('bg-[#EEEEEE]') : ('bg-none')}`}><FaImage /></button>
          <button
            onClick={
              () => {
                setHead(false)
                setImage(false)
                setBody(true)
                setLink(false)
              }
            } className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${body ? ('bg-[#EEEEEE]') : ('bg-none')}`}>B</button>
          <button
            onClick={
              () => {
                setHead(false)
                setImage(false)
                setBody(false)
                setLink(true)
              }
            } className={`px-[1.5rem] py-[.3rem] text-[1.1rem] rounded-md ${link ? ('bg-[#EEEEEE]') : ('bg-none')}`}><FaLink /></button>
        </div >
        <form onSubmit={handleSubmit} className='w-full h-fit flex justify-around p-[.5rem] shadow-lg'>
          {/* header */}
          {
            head && <textarea className='w-[90%] bg-[#EEEEEE] h-[90px] py-[.5rem] px-[1rem] rounded-md'
              placeholder='write head....'
              id="header"
              name="header"
              value={formData.header}
              onChange={handleChange}></textarea>
          }
          {/* image */}
          {
            image && <input className='w-[90%] bg-[#EEEEEE] h-[90px] py-[.5rem] px-[1rem] rounded-md'
              id="image"
              type='file'
              name="image"
              value={formData.image}
              onChange={() => {
                handleChange();
                uploadFile();
              }}
            ></input>
          }
          {/* body */}
          {
            body && <textarea className='w-[90%] bg-[#EEEEEE] h-[90px]  py-[.5rem] px-[1rem] rounded-md'
              placeholder='write body....'
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}></textarea>
          }

          {/* Link */}
          {link && <input className='w-[90%] bg-[#EEEEEE] h-[90px]  py-[.5rem] px-[1rem] rounded-md'
            placeholder='write link....'
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}></input>}
          <div className=' flex flex-col gap-[.5rem]'>
            <button
              onClick={siftnext}
              className='px-[1rem] py-[.5rem] bg-[#EEEEEE] rounded-md' >Next</button>
            <button className='px-[1rem] py-[.5rem] bg-[#111111] rounded-md text-[#FFFFFF]' type="submit">Submit</button>
          </div>
        </form>
      </div>

    </div>

  )
}

export default Blogs