import React, { useState, useEffect } from 'react';
import { auth } from "../../../firebase"; // Ensure this is the correct import for your firebase setup
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const [user, setUser] = useState(null); // State to store the logged-in user
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };

  // // Log out function
  const handleLogout = () => {
    auth.signOut(); // Sign out from Firebase
    navigate("/private-sector"); // Redirect to login page
  };

  // const username = user?.displayName || user?.email.split('@')[0] || "User";
  useEffect(() => {
    // Check if user is logged in on component mount
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser); // Set the logged-in user
    } else {
      // If no user is logged in, navigate to the login page
      navigate('/private-sector');
    }
  }, [navigate]);

  if (!user) return <div>Loading...</div>;
  

  return (
    <div className="flex h-screen bg-gray-100">
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
            <Link to="/dashboard" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>Home</Link>
            <Link to="/requestpickup" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>Request Pickup</Link>
            <Link to="/locatecompany" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>Locate Company</Link>
            {/* <Link to="/my-services" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>My Services</Link> */}
            <Link to="/payment-history" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>Payment History</Link>
            <Link to="/profile" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>Profile</Link>
            <Link to="/manage-account" className="py-2 text-white hover:bg-green-500" onClick={closeSidebar}>Manage Account</Link>
            <Link to="/private-sector" className="py-2 text-red-600 hover:text-red-800 " onClick={closeSidebar}>Logout</Link>
          </nav>
        </aside>

  {/* Main Content Area */}
  <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
    {/* Welcome Message */}
    <h1 className="mb-6 text-2xl font-bold">
          <h1>Welcome, {user.displayName ? user.displayName : 'User'}!</h1>
        </h1>

    {/* Quick Actions */}
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link to="/requestpickup" className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Request Waste Pickup
        </Link>
        <Link to="/sellwaste" className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Sell Your Waste
        </Link>
        <Link to="/locatecompany" className="px-4 py-2 text-white bg-[#FFA500] rounded hover:bg-orange-400">
          Locate Company
        </Link>
        <Link to="/manage-account" className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          Manage Account
        </Link>
      </div>
    </section>

    {/* Recent Activities */}
    <section>
      <h2 className="mb-4 text-lg font-semibold">Recent Activities</h2>
      <div className="p-4 bg-white rounded shadow-md">
        <ul className="space-y-3">
          <li className="text-gray-700">
            Booking #12345: Scheduled waste pickup on October 25, 2024
          </li>
          <li className="text-gray-700">
            Payment: ₦5,000 - Completed on October 20, 2024
          </li>
          <li className="text-gray-700">
            Booking #12344: Scheduled waste pickup on October 10, 2024
          </li>
          {/* Add more activities as needed */}
        </ul>
      </div>
    </section>
  </main>
</div>

  );
};

export default Dashboard;
