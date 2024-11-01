import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };
  
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [bookings, setBookings] = useState([
        { id: 1, date: '2024-10-15', status: 'Completed', details: 'Pickup at 123 Main St', type: 'Residential' },
        { id: 2, date: '2024-10-30', status: 'Upcoming', details: 'Pickup at 456 Elm St', type: 'Commercial' },
    ]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancelBooking = (id) => {
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
    };

    return (

<div className="flex flex-col md:flex-row  bg-gradient-to-b from-green-200 to-orange-200">
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
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:shadow-none`}>
    <div className="flex items-center justify-between">
      <div className="p-4 text-2xl font-bold text-white">Dashboard</div>
      <button onClick={closeSidebar} className="text-white focus:outline-none md:hidden">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav className="flex flex-col p-4">
      <Link to="/dashboard" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Home</Link>
      <Link to="/my-services" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>My Services</Link>
      <Link to="/payment-history" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Payment History</Link>
      <Link to="/profile" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Profile</Link>
      <Link to="/private-sector" className="py-2 text-red-600 hover:text-red-800" onClick={closeSidebar}>Logout</Link>
    </nav>
  </aside>

  {/* Main Content Area */}
  <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'} overflow-x-auto`}>
    <h1 className="mb-4 text-2xl font-bold">Profile</h1>

    {/* User Information Section */}
    <section className="p-6 mb-6 bg-white rounded shadow">
      <h2 className="mb-4 text-xl font-semibold">User Information</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="name">Name</label>
          {isEditing ? (
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-gray-800">{userInfo.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="email">Email</label>
          {isEditing ? (
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-gray-800">{userInfo.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="phone">Phone</label>
          {isEditing ? (
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-gray-800">{userInfo.phone}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleEditToggle}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </form>
    </section>

    {/* Booking History Section */}
    <section className="p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-xl font-semibold">Booking History</h2>
      <div className="overflow-x-auto"> {/* Added wrapper for horizontal scroll */}
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Details</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="px-4 py-2">{booking.date}</td>
                <td className="px-4 py-2">{booking.details}</td>
                <td className="px-4 py-2">{booking.status}</td>
                <td className="px-4 py-2">
                  {booking.status === 'Upcoming' && (
                    <button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="text-red-500 hover:underline"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </main>
</div>




    );
};

export default Profile;
