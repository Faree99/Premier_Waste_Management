import React from 'react';
import Navbar from "../navbar/Navbar";


const WasteDisposalGuidelines = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Waste Disposal Guidelines</h1>
      <p className="text-gray-700 mb-6">
        Proper waste disposal is essential for maintaining a clean environment and promoting public health. Below are guidelines for disposing of different types of waste effectively.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Household Waste</h2>
      <p className="text-gray-600 mb-4">
        Regular household waste, including food scraps and packaging, should be disposed of in designated bins for collection by your local waste management service. 
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Recyclables</h2>
      <p className="text-gray-600 mb-4">
        Items such as paper, cardboard, glass bottles, and certain plastics can be recycled. Ensure that they are clean and dry before placing them in recycling bins.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Hazardous Waste</h2>
      <p className="text-gray-600 mb-4">
        Batteries, chemicals, and electronics should not be disposed of in regular trash. Check with local waste management for hazardous waste drop-off locations and collection events.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Yard Waste</h2>
      <p className="text-gray-600 mb-4">
        Grass clippings, leaves, and branches can often be composted or collected separately by local services. Check for yard waste collection schedules in your area.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Bulky Items</h2>
      <p className="text-gray-600 mb-4">
        For large items like furniture or appliances, contact your local waste service for information on special collection days or drop-off centers.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Additional Resources</h2>
      <p className="text-gray-600 mb-4">
        For more detailed information, visit:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.epa.gov/recycle" className="text-blue-500 hover:underline">EPA Recycling Guidelines</a></li>
        <li><a href="https://www.recyclingpartnership.org" className="text-blue-500 hover:underline">Recycling Partnership</a></li>
      </ul>
    </div>
    </>
  );
};

export default WasteDisposalGuidelines;
