import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyServices = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };
    return (
        <div className="flex bg-gray-100">
      {/* Toggle Button for Mobile View */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-4 text-white bg-green-600 rounded hover:bg-green-700 md:hidden focus:outline-none"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 p-4 bg-green-700 shadow-md transform transition-transform duration-300 
                   ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:shadow-none`}    >
          <div className="flex items-center justify-between">
            <div className="p-4 text-2xl font-bold text-white">Dashboard</div>
            {/* Close Button Only Visible in Mobile View */}
            <button onClick={closeSidebar} className="text-white focus:outline-none md:hidden">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <nav className="flex flex-col p-4">
            <Link to="/dashboard" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Home</Link>
            <Link to="/requestpickup" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Request Pickup</Link>
            <Link to="/locatecompany" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Locate Company</Link>
            {/* <Link to="/my-services" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>My Services</Link> */}
            <Link to="/payment-history" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Payment History</Link>
            <Link to="/profile" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Profile</Link>
            <Link to="/manage-account" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Manage Account</Link>
            <Link to="/private-sector" className="py-2 text-red-600 hover:text-red-800 " onClick={closeSidebar}>Logout</Link>
          </nav>
        </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
                <h1 className="mb-4 text-2xl font-bold">My Services</h1>

                {/* Active Services Section */}
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Active Services</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <p className="text-gray-700">Weekly Waste Pickup - Residential</p>
                        <p className="text-sm text-gray-500">Next Pickup: November 3, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">Manage Service</button>
                    </div>
                </section>

                {/* Past Services Section */}
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Past Services</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <p className="text-gray-700">Monthly Recycling Pickup</p>
                        <p className="text-sm text-gray-500">Completed: October 15, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Details</button>
                    </div>
                </section>

                {/* Request New Service Section */}
                <section>
                    <h2 className="mb-2 text-xl font-semibold">Request New Service</h2>
                    <button className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Request Waste Pickup
                    </button>
                </section>
            </main>
        </div>
    );
};

export default MyServices;
