import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAccount = () => {
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
            <main className="flex-1 p-8">
                <h1 className="mb-6 text-2xl font-bold">Manage Account</h1>

                {/* Personal Information */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <label className="block mb-2">Name</label>
                        <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="John Doe" />
                        
                        <label className="block mb-2">Email</label>
                        <input type="email" className="w-full p-2 mb-4 border rounded" placeholder="johndoe@example.com" />
                        
                        <label className="block mb-2">Phone Number</label>
                        <input type="tel" className="w-full p-2 mb-4 border rounded" placeholder="+123456789" />

                        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Save Changes</button>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <label className="block mb-2">Primary Contact</label>
                        <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="+123456789" />

                        <label className="block mb-2">Alternative Contacts</label>
                        <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="Alternative contact" />

                        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Update Contacts</button>
                    </div>
                </section>

                {/* Address Book */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold">Address Book</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <p className="mb-4">No addresses saved. <Link to="/add-address" className="text-blue-500 hover:underline">Add an address</Link>.</p>
                    </div>
                </section>

                {/* Password and Security */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold">Password and Security</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <label className="block mb-2">Change Password</label>
                        <input type="password" className="w-full p-2 mb-4 border rounded" placeholder="New password" />

                        <div className="mb-4">
                            <label className="block mb-2">Two-Factor Authentication</label>
                            <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
                                Enable 2FA
                            </button>
                        </div>
                        
                        <div className="mb-4">
                            <label className="block mb-2">Login History</label>
                            <p className="text-gray-600">No recent logins.</p>
                        </div>
                    </div>
                </section>

                {/* Notification Settings */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold">Notification Settings</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <label className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            Receive email notifications
                        </label>
                        <label className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            Receive SMS notifications
                        </label>
                        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Save Preferences</button>
                    </div>
                </section>

                {/* Billing Information */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold">Billing Information</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <label className="block mb-2">Payment Methods</label>
                        <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="Card ending in 1234" />

                        <label className="block mb-2">Billing Address</label>
                        <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="123 Main St" />

                        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Update Billing Info</button>
                    </div>
                </section>

                {/* Deactivate Account */}
                <section className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold text-red-600">Deactivate Account</h2>
                    <div className="p-4 bg-white rounded shadow-md">
                        <p className="mb-4 text-gray-700">If you would like to deactivate your account, please note that this action is permanent and cannot be undone.</p>
                        <button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">Deactivate Account</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ManageAccount;
