import React from 'react';

const Introduction = () => (
  
  <div className="relative flex flex-col items-center justify-center h-[85vh] overflow-hidden text-white bg-gray-900">
      {/* Background Video */}
      <video 
        src="images/video6.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      {/* Content */}
      <div className="relative z-20 max-w-2xl px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Public Waste Management Services</h1>
       <p className="text-lg">Helping you manage your waste efficiently and sustainably</p>
       <p className="mb-8 text-lg">Join us today and experience the difference</p>
       <a href="/aboutus" className="px-6 py-3 text-white transition bg-green-700 rounded-full hover:bg-green-500">
         Learn More
       </a>
      </div>
    </div>


);

export default Introduction;
