import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file with dropdown styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    return (
        <header
            data-aos="fade"
            data-aos-duration="300"
            className="sticky top-0 z-50 border-b-[1px] border-primary/50 bg-gradient-to-l from-green-700 via-green-500 to-green-700 text-white shadow-lg"
        >
            <nav className="flex items-center justify-between p-4">
                <div className="text-2xl text-white md:text-3xl">
                    <Link to="/" className="">
                        P
                        <span className="inline-block font-bold text-primary dark:text-black">
                            WM
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden space-x-6 md:flex">
                    <Link to="/" className="text-white hover:underline">Home</Link>
                    <Link to="/aboutus" className="text-white hover:underline">About Us</Link>
                    
                    <div className="relative dropdown">
                        <button className="text-white hover:underline">
                           Services
                        </button>
                        <div className="absolute dropdown-content">
                            <Link to="/public-sector" className="block px-4 py-2 text-gray-800">Public Services</Link>
                            <Link to="/private-sector" className="block px-4 py-2 text-gray-800">Private Solutions</Link>
                        </div>
                    </div>

                    <Link to="/news" className="text-white hover:underline">News</Link>
                    <Link to="/contactus" className="text-white hover:underline">Contact Us</Link>
                </div>

                {/* Button and Mobile Menu Toggle */}
                <Link to="/guidelines"  className="hidden px-4 py-2 text-white bg-orange-500 rounded md:block hover:bg-orange-700">
                    Disposal Guidelines
                </Link>
                
                <div className="md:hidden">
                    <button onClick={toggleDropdown} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    
                     {/* Mobile Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 z-10 w-full mt-2 bg-white rounded shadow-lg md:hidden overflow-y-auto max-h-[75vh]">
                            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</Link>
                            <Link to="/aboutus" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</Link>      
                            <div className="relative">
                                <button 
                                    onClick={toggleMobileDropdown} 
                                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200">
                                    Services
                                </button>
                                {isMobileDropdownOpen && (
                                    <div className="absolute right-0 z-10 mt-2 bg-white rounded shadow-lg">
                                        <Link to="/public-sector" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Public Sector</Link>
                                        <Link to="/private-sector" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Private Sector</Link>
                                    </div>
                                )}
                            </div> 
                            <Link to="/news" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">News</Link> 
                            <Link to="/contactus" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</Link>
                            
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

