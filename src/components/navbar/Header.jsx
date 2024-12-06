import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../modal/Register'; // Assuming Register is the Sign-Up Modal
import LoginModal from '../modal/Login'; // Assuming LoginModal is the Login Modal
import './Navbar.css';

const Header = () => {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    // Function to toggle modals
    const toggleSignUpModal = () => setIsSignUpModalOpen(!isSignUpModalOpen);
    const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);

    return (
        <header
            data-aos="fade"
            data-aos-duration="300"
            className="sticky top-0 z-50 flex items-center justify-between p-4  bg-[#388E3C]  text-white shadow-lg"
        >
            {/* Logo */}
            <div className="text-2xl text-white md:text-3xl">
                <Link to="/" className="">
                    Eco
                    <span className="inline-block font-bold text-primary dark:text-black">
                        Trade
                    </span>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden space-x-6 md:flex">
                <div className="hidden space-x-6 md:flex">
                    <Link to="/" className="font-semibold text-white hover:underline">Home</Link>
                    <Link to="/aboutus" className="font-semibold text-white hover:underline">About Us</Link>
                    
                    <div className="relative z-20 dropdown">
                        <button className="font-semibold text-white hover:underline" onClick={toggleDropdown}>
                            Services
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute dropdown-content">
                                <Link to="/public-sector" className="block px-4 py-2 text-gray-800">Public Sector</Link>
                                <Link to="/private-sector" className="block px-4 py-2 text-gray-800">Private Sector</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/news" className="font-semibold text-white hover:underline">News</Link>
                    <Link to="/contactus" className="font-semibold text-white hover:underline">Contact Us</Link>
                </div>
            </nav>

            {/* CTA Buttons */}
            <div>
                {/* Sign Up Button */}
                <button
                    onClick={toggleSignUpModal}
                    className="px-4 py-2 ml-4 text-white transition border-2 border-white rounded-full hover:bg-white hover:text-green-800"
                >
                    Sign Up
                </button>
                
                {/* Log In Button */}
                <button
                    onClick={toggleLoginModal}
                    className="px-4 py-2 ml-4 text-green-900 transition bg-white border-2 border-green-600 rounded-full hover:bg-green-500 hover:text-white"
                >
                    Log In
                </button>
            </div>
            
            {/* Render the Sign Up Modal when `isSignUpModalOpen` is true */}
            {isSignUpModalOpen && <Register closeModal={toggleSignUpModal} />}

            {/* Render the Login Modal when `isLoginModalOpen` is true */}
            {isLoginModalOpen && <LoginModal closeModal={toggleLoginModal} />}

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={toggleDropdown} className="text-gray-300 hover:text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Mobile Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 z-30 w-full mt-2 bg-white rounded shadow-lg md:hidden overflow-y-auto max-h-[75vh]">
                        <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-green-200">Home</Link>
                        <Link to="/aboutus" className="block px-4 py-2 text-gray-800 hover:bg-green-200">About Us</Link>
                        <div className="relative">
                            <button 
                                onClick={toggleMobileDropdown} 
                                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-green-200"
                            >
                                Services
                            </button>
                            {isMobileDropdownOpen && (
                                <div className="absolute right-0 z-10 mt-2 bg-white rounded shadow-lg">
                                    <Link to="/public-sector" className="block px-4 py-2 text-gray-800 hover:bg-green-200">Public Services</Link>
                                    <Link to="/private-sector" className="block px-4 py-2 text-gray-800 hover:bg-green-200">Private Solution</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/news" className="block px-4 py-2 text-gray-800 hover:bg-green-200">News</Link>
                        <Link to="/contactus" className="block px-4 py-2 text-gray-800 hover:bg-green-200">Contact Us</Link>
                        <button
                            onClick={toggleSignUpModal}
                            className="block w-full px-4 py-2 mt-2 text-center text-green-500 border border-green-500 rounded hover:bg-green-800 hover:text-white"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={toggleLoginModal}
                            className="block w-full px-4 py-2 mt-2 text-center text-green-500 border border-green-500 rounded hover:bg-green-800 hover:text-white"
                        >
                           Login
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;





