import React from 'react';
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
        <div className='w-96 h-auto bg-white shadow-md rounded-lg p-4 flex flex-col mt-14'>
            <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
            <p className='text-gray-600 text-md font-light text-center mt-2'>Welcome Back!</p>

            <input Type="email" placeholder='example@mail.com' className='w-full h-10 rounded-lg border-2 border-gray-500 px-8 mt-4' />
            <input Type="password" placeholder='password' className='w-full h-10 rounded-lg border-2 border-gray-500 px-8 mt-4' />


            <button className='w-full h-12 rounded-lg bg-black text-white font-bold text-center mt-5'>Login to HerTech</button>

            <p className='text-center mt-6 font-light text-lg text-gray-600'>OR</p>

            <p className='text-center mt-5 text-gray-700 font-medium'>Don't have an account? 
            <Link to="/Signup">
            <span className='font-bold text-black'> Sign up</span>
            </Link>
            </p>
            <Link to="/forgottenpassword">
            <p className='text-center mt-5 mb-5 text-gray-700 font-medium'>Forgot Password?</p>
            </Link>
            
            

        </div>
    </div>
  )
}

