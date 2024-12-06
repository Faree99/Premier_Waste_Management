import React from 'react'

const Howitworks = () => {
  return (
    <section className="py-16 text-gray-800 ">
            <div className="max-w-6xl px-6 mx-auto ">
                <h2 className="mb-12 text-3xl font-semibold text-center md:text-4xl">
                    How It Works
                </h2>
                
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Public Option */}
                   
                    <div className="p-8 rounded-lg shadow-lg bg-green-50">
            <h3 className="mb-4 text-2xl font-bold text-center text-green-600">Public Waste Management Services</h3>
            <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                <span className="font-semibold text-green-500">1.</span>
                <p><span className='font-bold'>Locate a Trash Can:</span> Easily find nearby trash cans using our interactive map.</p>
                </li>
                <li className="flex items-center space-x-3">
                <span className="font-semibold text-green-500">2.</span>
                <p> <span className='font-bold'>View Pickup Schedule:</span> Stay informed with real-time updates on pickup schedules.</p>
                </li>
                <li className="flex items-center space-x-3">
                <span className="font-semibold text-green-500">3.</span>
                <p><span className='font-bold'>Track Progress:</span> Monitor the status of your waste collection for peace of mind.</p>
                </li>
            </ul>
            </div>


                    {/* Private Option */}
                    {/* <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold text-orange-600">Private Waste Management</h3>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center space-x-3">
                                <span className="font-semibold text-[#FFA500]">1.</span>
                                <p>Find a Recycling Center</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="font-semibold text-orange-500">2.</span>
                                <p>Choose a Service Provider</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="font-semibold text-orange-500">3.</span>
                                <p>Arrange Pickup or Drop-Off</p>
                            </li>
                        </ul>
                    </div> */}
                    <div className="p-8 rounded-lg shadow-lg bg-orange-50">
  <h3 className="mb-4 text-2xl font-bold text-center text-[#FFA500]">Private Waste Management Services</h3>
  <ul className="space-y-4 text-lg">
    <li className="flex items-center space-x-3">
      <span className="font-semibold text-[#FFA500]">1.</span>
      <p><span className='font-bold'>Find a Recycling Center:</span> Locate nearby recycling centers to dispose of your waste responsibly.</p>
    </li>
    <li className="flex items-center space-x-3">
      <span className="font-semibold text-[#FFA500]">2.</span>
      <p><span className='font-bold'>Choose a Service Provider:</span> Select from a variety of reliable service providers tailored to your needs.</p>
    </li>
    <li className="flex items-center space-x-3">
      <span className="font-semibold text-[#FFA500]">3.</span>
      <p><span className='font-bold'>Arrange Pickup or Drop-Off:</span> Schedule convenient pickup or drop-off services for your waste.</p>
    </li>
  </ul>
</div>

                </div>
            </div>
        </section>

  )
}

export default Howitworks;