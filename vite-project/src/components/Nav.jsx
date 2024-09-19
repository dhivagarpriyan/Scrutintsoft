import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        <ul className="flex space-x-4 text-white">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li className="relative group">
            <button className="hover:text-gray-400 focus:outline-none">
              Solutions
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute w-[200px] top-full mt-2 left-0 bg-white text-gray-800 shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#solution1">Solution 1</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#solution2">Solution 2</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#solution3">Solution 3</a>
              </li>
            </ul>
          </li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
