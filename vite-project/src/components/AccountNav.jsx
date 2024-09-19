/*import React,{useState} from 'react'
import account from "../assets/accounts1.png"
import { X,Menu,ChevronDown } from 'lucide-react';
const AccountNav = () => {
    const [nav,setNav]=useState(false);
  

    const navItems = [
        { label: "Features", href: "#" },
        { label: "Applications", href: "#" },
        { label: "Business", href: "#" },
        { label: "Company", href: "#" },

      ];
  return (
    
         <div  className=' sticky  top-0 py-4   bg-green-500'>
       <div className=' container mx-auto px-4 '>
        < div className='flex justify-between items-center'>
        
            <img src={account} className='w-[150px] '/>
            
            <ul className=" hidden lg:flex gap-x-4 md:gap-x-8 text-white ">
          <li><a href="#home" className="hover:text-coral-red">Home</a></li>
          <li><a href="#about" className="hover:text-coral-red">About</a></li>
          <li className="relative group">
            <button className=" flex hover:text-coral-red focus:outline-none">
              Solutions <ChevronDown />
            </button>
             Dropdown Menu 
            <ul className="absolute py-4 text-sm  mt-8 top-full w-[250%]  left-0 bg-white text-gray-800 shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li className="px-6 py-2  hover:text-coral-red">
                <a href="#solution1">Solution 1</a>
              </li>
              <li className="px-6 py-2 hover:text-coral-red">
                <a href="#solution2">Solution 2</a>
              </li>
             
            </ul>
          </li>
          <li className="relative group">
            <button className=" flex hover:text-coral-red focus:outline-none">
              Features <ChevronDown />
            </button>
             Dropdown Menu 
            <ul className="absolute py-8 w-[250%] mt-8 top-full text-sm left-0 bg-white text-gray-800 shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution1">Invoice</a>
              </li>
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution2">Recurring Invoice</a>
              </li>
              <li className="py-2 px-6 hover:text-coral-red">
                <a href="#solution3">All Features</a>
              </li>
            </ul>
          </li>
          <li><a href="#contact" className="hover:text-coral-red">Contact</a></li>
        </ul>

             <div className=' hidden lg:flex gap-x-4'>
                    
                    <button className='border-2 border-gray-300 bg-green-800 text-white hover:bg-white hover:text-green-800 py-3 px-4 rounded-md '>
                        Go to accounts
                    </button>
                 </div>
                 <div className=' lg:hidden text-white'>
                     <button onClick={()=>setNav(!nav)}>
                        {nav?<X/>:<Menu/>}
                     </button>
                 </div>
        </div>
        {nav && (
                <div className=' ease-in-out duration-200 fixed  right-0 w-full   my-2 bg-white flex flex-col px-6 py-8 cursor-pointer lg:hidden h-fit'>
                     
                 <ul  className=' cursor-pointer flex flex-col gap-y-4'>
                 <li><a href="#home" className="hover:text-coral-red">Home</a></li>
                 <li><a href="#about" className="hover:text-coral-red">About</a></li>
                 <li className="relative group">
                  <button className=" flex hover:text-coral-red focus:outline-none">
                    Solutions <ChevronDown  className=' ml-8'/>
                  </button>
                      Dropdown Menu 
                   <ul className="absolute px-8 py-4 w-[250px] mt-8 top-full  left-0 bg-white text-gray-800 shadow-xl rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                     <li className="px-4 py-2 hover:text-coral-red">
                        <a href="#solution1">Solution 1</a>
                    </li>
                    <li className="py-2 px-4 hover:text-coral-red">
                      <a href="#solution2">Solution 2</a>
                    </li>
                     <li className="px-4 py-2 hover:text-coral-red">
                       <a href="#solution3">Solution 3</a>
                    </li>
                     </ul>
                      </li> 
                     
                       <li><a href="#contact" className="hover:text-coral-red">Contact</a></li>
                    </ul>
                 
                 <div className=' pt-8 flex gap-x-4'>
                   <button className='border-2 border-gray-300 bg-green-800 text-white hover:bg-white hover:text-green-800 p-2 rounded-md '>
                        Go to accounts
                    </button>
                   
                 </div>
                </div>
            )}
       </div>
    </div>
    
  )
}

export default AccountNav */

import React, { useState } from 'react';
import account from '../assets/accounts1.png';
import { X, Menu, ChevronDown } from 'lucide-react';

const AccountNav = () => {
  const [nav, setNav] = useState(false);

  const DropdownMenu = ({ title, items }) => (
    <li className="relative group">
      <button className="flex hover:text-coral-red focus:outline-none">
        {title} <ChevronDown />
      </button>
      <ul className="absolute py-4 text-sm mt-4 top-full w-[250%] left-0 bg-white text-gray-800 shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500">
        {items.map((item, index) => (
          <li className="px-6 py-2 hover:text-coral-red" key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    {
      label: 'Solutions',
      href: '#',
      dropdown: [
        { label: 'Solution 1', href: '#solution1' },
        { label: 'Solution 2', href: '#solution2' },
      ],
    },
    {
      label: 'Features',
      href: '#',
      dropdown: [
        { label: 'Invoice', href: '#invoice' },
        { label: 'Recurring Invoice', href: '#recurring' },
        { label: 'All Features', href: '#features' },
      ],
    },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky z-50 top-0 py-4 bg-green-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <img src={account} alt="logo" className="w-[150px]" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-x-4 md:gap-x-8 text-white">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <DropdownMenu key={index} title={item.label} items={item.dropdown} />
              ) : (
                <li key={index}>
                  <a href={item.href} className="hover:text-coral-red">
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-x-4">
            <button className="border-2 border-gray-300 bg-[#008000] text-white hover:bg-white hover:text-[#008000] py-3 px-4 rounded-md">
              Go to accounts
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden text-white">
            <button onClick={() => setNav(!nav)}>{nav ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile menu */}
        {nav && (
          <div className="fixed mt-8 z-50 right-0 w-full bg-white flex flex-col px-6 py-8 cursor-pointer lg:hidden h-fit">
            <ul className="flex flex-col gap-y-4">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <DropdownMenu key={index} title={item.label} items={item.dropdown} />
                ) : (
                  <li key={index}>
                    <a href={item.href} className="hover:text-coral-red">
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
            <div className="pt-8 flex gap-x-4">
              <button className="border-2 border-gray-300 bg-green-800 text-white hover:bg-white hover:text-green-800 p-2 rounded-md">
                Go to accounts
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AccountNav;
