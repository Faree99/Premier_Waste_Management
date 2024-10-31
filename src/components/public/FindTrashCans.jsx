import React from 'react';
// import MapComponent from './components/directory/MapComponent'; 


const FindTrashCans = () => (
  <section className="max-w-4xl p-6 mx-auto my-10 text-gray-800 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-3xl font-semibold text-green-800">Find Nearest Public Trash Can</h2>
    <p className="mb-6">Locate public trash cans closest to your location with our interactive map.</p>
    <div className="flex justify-center">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg h-96">
        {/* Replace with actual map component */}
        <MapComponent />
      </div>
    </div>
  </section>
);

export default FindTrashCans;
