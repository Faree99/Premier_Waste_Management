import React from 'react';
import Navbar from "../components/navbar/Navbar";
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <>
        <Navbar />
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 text-white py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Premier Waste Management Services</h1>
            <p className="text-lg mb-6">Choose the best services tailored for you.</p>
            <Link to="/contactus" className="bg-white text-green-500 py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 hover:text-white">
              Get Started
            </Link>
          </div>
        </section>
  
        {/* Public Sector Section */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center">Public Sector Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src="/images/pickup.jpg" alt="Public Waste Management" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">Community Waste Collection</h3>
                <p className="text-gray-700 mt-2">
                  Our public sector services focus on community-driven waste management initiatives, ensuring that your neighborhood stays clean and sustainable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src="/images/recyler.jpg" alt="Public Recycling Programs" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">Recycling Programs</h3>
                <p className="text-gray-700 mt-2">
                  Join our recycling initiatives to reduce waste and promote a healthier environment. We provide bins and collection for recyclable materials.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Private Sector Section */}
        <section className="py-10 bg-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center">Private Sector Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src="/images/dum.jpg" alt="Private Waste Pickup" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">Tailored Waste Pickup</h3>
                <p className="text-gray-700 mt-2">
                  Our private sector services offer customized waste pickup schedules to suit your business needs, ensuring minimal disruption and maximum efficiency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src="/images/garbage.jpg" alt="Private Waste Management Consultation" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">Consultation Services</h3>
                <p className="text-gray-700 mt-2">
                  We provide expert consultations for businesses looking to optimize their waste management processes and adhere to environmental regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Conclusion Section */}
        <section className="py-10 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <Link to="/contactus" className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Contact Us Today
          </Link>
        </section>
      </div>
      </>
    );
  };
  
  export default Services;
  