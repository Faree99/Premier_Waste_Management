import React from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaTruck, FaMoneyBill } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-16 text-gray-800 bg-gray-100">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-extrabold">How It Works</h2>
        
        <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-4">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <FaUserCircle className="mb-4 text-4xl text-blue-500 " />
            <h3 className="mb-2 text-xl font-semibold">Step 1: Register/Login</h3>
            <p className="text-gray-600">Create an account or log in to access services tailored to your location.</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center p-4 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <FaMapMarkerAlt className="mb-4 text-4xl text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">Step 2: Find & Book Service</h3>
            <p className="text-gray-600">Locate nearby waste management providers and book a service with ease.</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <FaTruck className="mb-4 text-4xl text-yellow-500" />
            <h3 className="mb-2 text-xl font-semibold">Step 3: Waste Pickup</h3>
            <p className="text-gray-600">Your waste is picked up at your location by a nearby waste management provider.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center transition duration-300 bg-white rounded-lg shadow-md p-9 hover:shadow-lg">
            <FaMoneyBill className="mb-4 text-4xl text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">Step 4: Earn Rewards</h3>
            <p className="text-gray-600">Sell your waste and get rewarded with ease!</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
