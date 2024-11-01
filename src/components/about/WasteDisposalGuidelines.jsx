import React from 'react';
import Navbar from "../navbar/Navbar";


const WasteDisposalGuidelines = () => {
  return (
    <>
    <Navbar />
    <div className="container p-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Waste Disposal Guidelines</h1>
      <p className="mb-6 text-gray-700">
        Proper waste disposal is essential for maintaining a clean environment and promoting public health. Below are guidelines for disposing of different types of waste effectively.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">1. Household Waste</h2>
      <p className="mb-4 text-gray-600">
        Regular household waste, including food scraps and packaging, should be disposed of in designated bins for collection by your local waste management service. 
      </p>

      <h2 className="mb-2 text-2xl font-semibold">2. Recyclables</h2>
      <p className="mb-4 text-gray-600">
        Items such as paper, cardboard, glass bottles, and certain plastics can be recycled. Ensure that they are clean and dry before placing them in recycling bins.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">3. Hazardous Waste</h2>
      <p className="mb-4 text-gray-600">
        Batteries, chemicals, and electronics should not be disposed of in regular trash. Check with local waste management for hazardous waste drop-off locations and collection events.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">4. Yard Waste</h2>
      <p className="mb-4 text-gray-600">
        Grass clippings, leaves, and branches can often be composted or collected separately by local services. Check for yard waste collection schedules in your area.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">5. Bulky Items</h2>
      <p className="mb-4 text-gray-600">
        For large items like furniture or appliances, contact your local waste service for information on special collection days or drop-off centers.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Additional Resources</h2>
      <p className="mb-4 text-gray-600">
        For more detailed information, visit:
      </p>
      <ul className="mb-4 list-disc list-inside">
        <li><a href="https://www.epa.gov/recycle" className="text-blue-500 hover:underline">EPA Recycling Guidelines</a></li>
        <li><a href="https://www.recyclingpartnership.org" className="text-blue-500 hover:underline">Recycling Partnership</a></li>
      </ul>
    </div>
    </>
  );
};

export default WasteDisposalGuidelines;
