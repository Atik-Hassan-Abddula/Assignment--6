import React from 'react';
import logo from '../assets/logo.png'
import Image from 'next/image';

const Navbar = () => {
    const links = <>
    
     <button className=' btn rounded-3xl text-yellow-200 items-center'><a>Workouts</a></button>
        
        <li className='items-center'><a>My Plan</a></li>
    
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   <div className='flex items-center'>
     <div>
     <Image src={logo} alt=''/>
     </div>
     <div>
        <a className="btn btn-ghost text-xl">FITLOG</a>
     </div>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-3.5">
    <div>
    <a className="">Plan</a>
    </div>
    <div>
        <a className="">Saved</a>
    </div>
  </div>
</div>
    );
};

export default Navbar;