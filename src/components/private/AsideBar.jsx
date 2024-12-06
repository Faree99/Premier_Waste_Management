import React from 'react'

const AsideBar = () => {
  return (
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
 {/* <Link to="/my-services" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>My Services</Link> */}
 <Link to="/payment-history" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Payment History</Link>
 <Link to="/profile" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Profile</Link>
 <Link to="/private-sector" className="py-2 text-red-600 hover:text-red-800 " onClick={closeSidebar}>Logout</Link>
</nav>
</aside>
  )
}

export default AsideBar