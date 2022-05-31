import React from 'react';
import { Link } from "react-router-dom";

export default function forgotpassword() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
        <div className='w-96 h-auto bg-white shadow-md rounded-2xl p-4 flex flex-col mt-14'>
            <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
            <p className='text-gray-600 text-md font-light text-center mt-2'>Forgot password</p>

            <input Type="email" placeholder='email address' className='w-full h-10 rounded-lg border-2 border-gray-500 px-8 mt-4' />


            <button className='w-full h-12 rounded-lg bg-black text-white font-bold text-center mt-5'>Reset password</button>

            <p className='text-center mt-5 text-gray-700 font-medium'>Already have an account? 
            <Link to="/Login">
            <span className='font-bold text-black'> Login</span>
            </Link>
            </p>            

        </div>
    </div>
  )
}

