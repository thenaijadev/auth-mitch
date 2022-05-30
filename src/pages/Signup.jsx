import React from 'react';
import { Link } from "react-router-dom";
import google from "../images/google.svg";
import linkedIn from "../images/linkedIn.svg";

export default function signup() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
        <div className='w-96 h-auto bg-white shadow-md rounded-lg p-4 flex flex-col mt-14'>
            <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
            <p className='text-gray-800 text-md font-light text-center mt-2'>You're 1-click away from creating an account</p>

            <input Type="email" placeholder='example@mail.com' className='w-full h-10 rounded-lg border-2 border-gray-500 px-8 mt-4' />
            <input Type="password" placeholder='password' className='w-full h-10 rounded-lg border-2 border-gray-500 px-8 mt-4' />


            <button className='w-full h-12 rounded-lg bg-black text-white font-bold text-center mt-5'>Login to HerTech</button>

            <p className='text-center mt-6 font-light text-lg text-gray-600'>OR</p>

            <button className='w-full h-12 rounded-lg bg-gray-200 text-black items-center justify-center flex font-medium text-center mt-5 '> <img src={google} alt='google-icon' className=' p-3' /> Continue with Google</button>
            <button className='w-full h-12 rounded-lg bg-gray-200 text-black items-center justify-center font-medium flex mt-3 mb-5'><img src={linkedIn} alt='linkedIn-icon' className='p-3'/> Continue with LinkedIn</button>


            <p className='text-center mt-5 text-gray-700 font-medium mb-5'>Already have an account? 
            <Link to="/Login">
            <span className='font-bold text-black'> Login</span>
            </Link>
            </p>            

        </div>
    </div>
  )
}

