import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='w-full h-24 shadow-md bg-white flex p-5 justify-between item-center'>
        <div className='flex-1'>
            LOGO
        </div>

        <div className='flex justify-evenly flex-1'>
        <Link to="/">
           <p>Home</p>
        </Link>

        <Link to="/Login">
           <p>Login</p>
        </Link>

        <Link to="/Signup">
            <p>Signup</p>
        </Link>
        </div>
    </div>
  )
}
