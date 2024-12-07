import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../directory/MapComponent';


const wasteManagementCompanies = [
        {
            id: 1,
            name: "Eco Waste Solutions",
            phone: "0801-234-5678",
            rating: 4.6,
            location: "Lagos",
            address: "123 Eco Street, Lagos",
            services: ["Household Waste", "Commercial Waste", "Recycling"]
        },
        {
            id: 2,
            name: "Green Cycle Services",
            phone: "0812-345-6789",
            rating: 4.8,
            location: "Lagos",
            address: "45 Green Lane, Lagos",
            services: ["E-waste Disposal", "Construction Waste"]
        },
        {
            id: 3,
            name: "Waste Management Experts",
            phone: "0903-456-7890",
            rating: 4.5,
            location: "Abuja",
            address: "67 Waste Ave, Abuja",
            services: ["Household Waste", "Industrial Waste"]
        },
        {
            id: 4,
            name: "Clean Nigeria Initiative",
            phone: "0704-567-8901",
            rating: 4.7,
            location: "Abuja",
            address: "12 Clean St, Abuja",
            services: ["Recycling", "Hazardous Waste"]
        },
        {
            id: 5,
            name: "Waste Warriors",
            phone: "0805-678-9012",
            rating: 4.4,
            location: "Port Harcourt",
            address: "90 Warrior Lane, Port Harcourt",
            services: ["Bulk Waste Collection", "Organic Waste"]
        },
        {
            id: 6,
            name: "Eco-Friendly Waste",
            phone: "0813-789-0123",
            rating: 4.6,
            location: "Port Harcourt",
            address: "34 Eco Rd, Port Harcourt",
            services: ["Recycling", "General Waste Management"]
        },
        {
            id: 7,
            name: "Waste Management Solutions",
            phone: "0901-234-5678",
            rating: 4.9,
            location: "Enugu",
            address: "56 Solution St, Enugu",
            services: ["Household Waste", "Recycling"]
        },
        {
            id: 8,
            name: "Clean City Services",
            phone: "0702-345-6789",
            rating: 4.3,
            location: "Enugu",
            address: "78 Clean Rd, Enugu",
            services: ["Industrial Waste", "E-waste Disposal"]
        },
        {
            id: 9,
            name: "Waste Reduction Co.",
            phone: "0803-456-7890",
            rating: 4.5,
            location: "Ibadan",
            address: "23 Reduce St, Ibadan",
            services: ["Composting", "Waste Collection"]
        },
        {
            id: 10,
            name: "Green Planet Waste",
            phone: "0814-567-8901",
            rating: 4.7,
            location: "Ibadan",
            address: "88 Green Way, Ibadan",
            services: ["Residential Waste", "Commercial Waste"]
        },
        {
            id: 11,
            name: "Ilorin Waste Management Services",
            phone: "0908-123-4567",
            rating: 4.5,
            location: "Ilorin",
            address: "10 Waste St, Ilorin",
            services: ["Residential Waste", "Recycling"]
        },
        {
            id: 12,
            name: "Eco Care Solutions",
            phone: "0816-234-5678",
            rating: 4.2,
            location: "Ilorin",
            address: "20 Green Lane, Ilorin",
            services: ["Hazardous Waste", "Construction Waste"]
        },
        {
            id: 13,
            name: "Waste to Wealth Co.",
            phone: "0705-345-6789",
            rating: 4.8,
            location: "Ilorin",
            address: "30 Eco Ave, Ilorin",
            services: ["E-waste Disposal", "Organic Waste"]
        },
        {
            id: 14,
            name: "Ilorin Recycling Center",
            phone: "0806-456-7890",
            rating: 4.6,
            location: "Ilorin",
            address: "40 Recycle St, Ilorin",
            services: ["Recycling", "Bulk Waste Collection"]
        },
        {
            id: 15,
            name: "Greenway Waste Services",
            phone: "0817-567-8901",
            rating: 4.4,
            location: "Ilorin",
            address: "50 Greenway, Ilorin",
            services: ["Commercial Waste", "Household Waste"]
        },
        {
            id: 16,
            name: "Sustainable Waste Management",
            phone: "0909-678-9012",
            rating: 4.9,
            location: "Lagos",
            address: "11 Sustainable St, Lagos",
            services: ["Industrial Waste", "General Waste Management"]
        },
        {
            id: 17,
            name: "Eco Innovations",
            phone: "0818-789-0123",
            rating: 4.7,
            location: "Abuja",
            address: "15 Innovation Rd, Abuja",
            services: ["E-waste Disposal", "Composting"]
        },
        {
            id: 18,
            name: "Clean World Initiative",
            phone: "0701-890-1234",
            rating: 4.5,
            location: "Port Harcourt",
            address: "55 Clean World, Port Harcourt",
            services: ["Bulk Waste Collection", "Hazardous Waste"]
        },
        {
            id: 19,
            name: "City Cleaners",
            phone: "0802-901-2345",
            rating: 4.6,
            location: "Ibadan",
            address: "25 City Cleaners St, Ibadan",
            services: ["Household Waste", "Recycling"]
        },
        {
            id: 20,
            name: "Waste Solutions Nigeria",
            phone: "0904-012-3456",
            rating: 4.3,
            location: "Lagos",
            address: "80 Solution St, Lagos",
            services: ["E-waste Disposal", "Recycling"]
        }
    ];
    
const LocateCompany = () => {
    const [location, setLocation] = useState('');
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    const handleSearch = () => {
        const results = wasteManagementCompanies.filter(company => 
            company.location.toLowerCase() === location.toLowerCase()
        );
        setFilteredCompanies(results);
    };

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
            <main className="flex-1 p-6">
                <h1 className="mb-4 text-2xl font-bold">Locate Waste Management Companies</h1>

                {/* Search Bar */}
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Enter your location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 border rounded" 
                    />
                    <button onClick={handleSearch} className="p-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Search
                    </button>
                </div>

                {/* List of Companies */}
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold">Nearby Companies</h2>
                    <ul className="mt-2">
                        {filteredCompanies.length > 0 ? (
                            filteredCompanies.map((company) => (
                                <li key={company.id} className="flex justify-between p-2 border-b">
                                    <div>
                                        <div className="font-bold">{company.name}</div>
                                        <div>{company.phone}</div>
                                        <div>Rating: {company.rating}</div>
                                        <div>Address: {company.address}</div>
                                        <div>Services: {company.services.join(", ")}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <button className="p-1 mt-2 text-white bg-green-500 rounded hover:bg-green-600">Call</button>
                                        <a 
                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.address)}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-1 mt-1 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
                                >
                        Get Directions
                    </a>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="p-4 text-center text-gray-500">No companies found for this location.</li>
                        )}
                    </ul>
                </div>
            

                <div className="mt-4 h-72">
            <MapComponent />
          </div>
            </main>
                       
        </div>
    );
};

export default LocateCompany;

