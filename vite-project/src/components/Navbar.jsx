/*import React,{useState} from 'react'
import poster from "../assets/poster.png"
import { X,Menu } from 'lucide-react';


const Navbar = () => {

    const [nav,setNav]=useState(false);

    const navItems = [
        { label: "Features", href: "#" },
        { label: "Applications", href: "#" },
        { label: "Business", href: "#" },
        { label: "Company", href: "#" },
      ];
     
    return (

    <div  className='  top-0 py-4 backdrop-blur-lg border-b border-coral-red'>
       <div className=' container mx-auto px-4 text-md'>
        <div className='flex justify-between items-center'>
        
            <img src={poster} className='w-[150px] '/>
            <ul className=' hidden md:flex gap-x-4 font-medium text-medium '>
                    {navItems.map((item,index)=>(
                       <li className='text-black hover:text-coral-red' key={index}>{item.label}</li>
                    ))}
            </ul>
            <div className=' hidden md:flex gap-x-4'>
                    <button className='border-2 border-gray-300 bg-coral-red text-white py-1 px-2 rounded-md'>
                        Sign in
                    </button>
                    <button className='border-2 border-gray-300 bg-coral-red text-white  py-1 px-2 rounded-md hidden lg:block'>
                        Create Button
                    </button>
                 </div>
                 <div className=' md:hidden text-coral-red'>
                     <button onClick={()=>setNav(!nav)}>
                        {nav?<X/>:<Menu/>}
                     </button>
                 </div>
        </div>
        {nav && (
                <div className=' ease-in-out duration-200 fixed z-100 right-0 w-full  bg-white flex flex-col items-center py-8  md:hidden h-fit'>
                     
                 <ul onClick={()=>setNav(!nav)} className='flex flex-col gap-y-4 font-medium '>
                    {navItems.map((item,index)=>(
                       <li  className=" hover:text-[00df9a]" key={index}>{item.label}</li>
                    ))}
                 </ul>
                 
                 <div className=' pt-8 flex gap-x-4'>
                    <button onClick={()=>setNav(!nav)} className='border-2 border-gray-500 bg-coral-red text-white py-1 px-2 rounded-md'>
                        Sign in
                    </button>
                    <button onClick={()=>setNav(!nav)} className='border-2 border-gray-500 bg-coral-red text-white py-1 px-2 rounded-md'>
                        Create Button
                    </button>
                 </div>
                </div>
            )}
       </div>
    </div>

  )
}

export default Navbar */
import React, { useState } from 'react';
import poster from '../assets/poster.png';
import { X, Menu,ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    
    { label: 'Applications', href: '#' },
    { label: 'Busistream', href: '#' },
    { label: 'Company', href: '#' },
  ];

  return (
    <nav className="top-0 py-4 backdrop-blur-lg border-b border-coral-red">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <img src={poster} alt="logo" className="w-[200px]" />

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-x-4 md:gap-x-8 text-[#061e5c]">
            
              <li className=" hover:text-coral-red">
                 Applications
             </li>
             <li className=" hover:text-coral-red">
                 Busistream
             </li>
             <li className="relative group">
            <button className=" flex hover:text-coral-red focus:outline-none">
              Company <ChevronDown />
            </button>
            
            <ul className="absolute py-8 w-[250%] mt-20 z-80 top-full text-sm left-0 bg-white text-gray-800 shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution1">About Us</a>
              </li>
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution2">Business Ideas</a>
              </li>
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution3">Contact Us</a>
              </li>
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution3">Patner With Us</a>
              </li>
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution3">Support</a>
              </li>
            </ul>
          </li>

        
          </ul>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-x-4">
            <button className="hover:bg-white text-indigo-950 py-2 px-4 hover:shadow-xl rounded-md">
              Sign in
            </button>
            <button className=" bg-coral-red text-white py-3 px-4 rounded-md hidden lg:block">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-coral-red">
            <button onClick={() => setNav(!nav)}>{nav ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile menu */}
        {nav && (
          <div className="fixed mt-16 z-50 right-0 w-full bg-white flex flex-col px-8 py-8 md:hidden h-fit transition duration-200">
            <ul onClick={() => setNav(false)} className="flex flex-col gap-y-4 font-medium">
              {navItems.map((item, index) => (
                <li className="hover:text-[00df9a]" key={index}>
                  {item.label}
                </li>
              ))}
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
