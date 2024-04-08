import React from 'react'
import { useState } from 'react';
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {

  const [passworda, setpassword] = useState(true);

  const eye = () => {
    setpassword(!passworda);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Submitted:', { email, password });
  };

  return (
    <div className='w-full h-fit fixed bg-[rgba(247,247,248,1)] flex items-center justify-center'>
      <div className='bg-[rgba(255,255,255,1)] my-14 mb w-[40%] flex flex-col items-center'>
        <img className='h-[112px] w-[200px] mt-4' src='/IMG-20231226-WA0003 2.png'></img>
        <p className='font-semibold mt-8 text-[1.5rem] tracking-wide'>Admin Snackbae</p>
        <div className='w-full  p-9 mt-14'>
          <form className='flex flex-col items-start gap-2 text-[1.5rem] w-full' onSubmit={handleSubmit}>

            <label className='' htmlFor="email">Email Address</label>
            <input
              className='border-2 w-full bg-slate-50 py-1 px-3 rounded-md text-[1.2rem]'
              placeholder='example@gmail.com'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />


            <label htmlFor="password">Password</label>
            <div className='flex items-center w-full relative'>
              <input
                className='border-2 w-full bg-slate-50 py-1 px-3 rounded-md text-[1.2rem]'
                placeholder='*********'
                type={passworda ? 'password' : 'text'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className=' cursor-pointer w-[5%] absolute right-2' onClick={eye}>
                {
                  passworda ? <IoEyeOffSharp /> : <FaEye />
                }

              </div>
            </div>


            <Link to='/admin' className='w-full bg-yellow-400 flex justify-center items-center py-2 rounded-md mt-4'>
              <button type="submit">Login</button>
            </Link>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Home