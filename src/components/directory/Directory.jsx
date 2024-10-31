import React, { useState } from 'react';
import MapComponent from './MapComponent';

const Directory = () => {
    const [selectedTab, setSelectedTab] = useState('public');

  return (
    <section className="py-16 text-gray-800 bg-gradient-to-b from-green-100 via-green-300 to-green-500">
            <div className="max-w-6xl px-6 mx-auto">
                <h2 className="mb-8 text-3xl font-semibold text-center md:text-4xl">
                    Find What You Need
                </h2>

                {/* Tabs for Selection */}
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setSelectedTab('public')}
                        className={`px-4 py-2 font-semibold border-b-2 ${selectedTab === 'public' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Public Services
                    </button>
                    <button
                        onClick={() => setSelectedTab('private')}
                        className={`px-4 py-2 font-semibold border-b-2 ml-4 ${selectedTab === 'private' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Private Services
                    </button>
                </div>

                {/* Content based on selected tab */}
                <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
               
            {selectedTab === 'public' && (
                <div className="p-6 text-center bg-white rounded-lg shadow-md md:w-1/2">
                    <h3 className="mb-4 text-2xl font-bold text-green-600">Public Trash Cans</h3>
                    <p className="mb-4">Locate public trash cans near you or check pickup schedules with our map.</p>
                    {/* Interactive Map */}
                    <div className="flex items-center justify-center h-48 bg-gray-200 rounded-lg">
                        <MapComponent /> {/* Replace static map with the MapComponent */}
                    </div>
                </div>
            )}

            {selectedTab === 'private' && (
                <div className="p-6 text-center bg-white rounded-lg shadow-md md:w-1/2">
                    <h3 className="mb-4 text-2xl font-bold text-orange-600">Recycling Centers</h3>
                    <p className="mb-4">Find nearby recycling centers or private waste management options in your area.</p>
                    {/* Static Map/Image for private tab, or you could use another MapComponent if needed */}
                    <div className="flex items-center justify-center h-48 bg-gray-200 rounded-lg">
                    <MapComponent /> {/* Replace static map with the MapComponent */}
                    </div>
                </div>
            )}
                </div>
            </div>
        </section>
  )
}

export default Directory;