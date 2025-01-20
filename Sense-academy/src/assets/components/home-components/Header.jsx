import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import senselogo from '../../image/senselogo.png'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center bg-white  px-[15px] py-[20px] border-b-2 sticky top-0 z-[9000] overflow-x-hidden">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center justify-between">
          <img
            className="shrink-0 w-[100px] h-10 md:w-[150px] md:h-10"
            style={{ objectFit: 'contain' }}
            src={senselogo}
            alt="Logo"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex items-center gap-2.5 lg:w-[522px] w-[50%] rounded-lg border border-gray-700 px-2 ml-[-30px] md:ml-0">
          <span className="fa fa-search"></span>
          <input
            type="search"
            className="w-full py-2 outline-none"
            placeholder="Search courses"
          />
        </div>       

        {/* Cart and Login */}
        <div className=" hidden lg:flex items-center gap-4 ">
          <Link to="" className="text-gray-700 text-center text-sm font-medium border border-gray-700 px-3 py-2 rounded mr-[50px]">
            Teach on Sense Academy
          </Link>
          <Link to="" className="flex items-center gap-2 mr-4">
            <span className="fa fa-shopping-cart"></span>
          </Link>
          <Link to="/app/login" className="border border-gray-700 px-3 py-2 rounded text-sm font-medium">
            Log In
          </Link>
          <Link to="/app/signup" className="border border-gray-700 px-3 py-2 rounded text-sm font-medium">
            Sign Up
          </Link>
        </div>

        {/* Cart and Hamburger Menu for Mobile */}
        <Link to="" className="flex md:hidden items-center gap-2 mr-0">
            <span className="fa fa-shopping-cart"></span>
        </Link>

        <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="fa fa-bars"></span>
          </button>

        {/* Mobile Menu */}
        <div className={`flex flex-col fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${ menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 right-4 text-gray-700 text-2xl focus:outline-none" onClick={toggleMenu}>
                <span className="fa fa-times"></span>
            </button>
            <div className="flex flex-col gap-6 px-6 pt-[80px]">
                <Link to="/">Home</Link>
                <Link to="">Courses</Link>
                <Link to="">About Us</Link>
                <span className="fa fa-shopping-cart"></span>
                <div className="flex flex-row justify-center items-center gap-4">
                    <Link to="/app/login" className="border border-gray-700 px-3 py-2 rounded text-sm font-medium">
                    Log In
                    </Link>
                    <Link to="/app/signup" className="border border-gray-700 px-3 py-2 rounded text-sm font-medium">
                    Sign Up
                    </Link>
                </div>
                <Link to="" className="text-gray-700 text-center text-sm font-medium border border-gray-700 px-3 py-2 rounded">
                    Teach on Sense Academy
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
