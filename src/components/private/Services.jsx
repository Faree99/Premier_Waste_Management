// import React from "react";

// const services = [
//   {
//     title: "Residential Pickup",
//     description: "Convenient waste pickup right from your home.",
//     image: "images/image2.jpg", 
//     link: "/services/residential-pickup",
//   },
//   {
//     title: "Commercial Services",
//     description: "Efficient waste solutions for businesses.",
//     image: "images/bus.jpeg", 
//     link: "/services/commercial-services",
//   },
//   {
//     title: "Recycling Options",
//     description: "Eco-friendly recycling options for all.",
//     image: "images/recyler.jpg", 
//     link: "/services/recycling-options",
//   },
 
// ];

// const Services = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">
//         Services Offered
//       </h2>
//       <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, index) => (
//           <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
//             <img src={service.image} alt={service.title} className="object-cover w-full h-48" />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
//               <p className="mt-2 text-gray-600">{service.description}</p>
//               <a
//                 href={service.link}
//                 className="inline-block mt-4 text-blue-500 hover:underline"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useState } from "react";

const services = [
  {
    title: "Residential Pickup",
    description: "Convenient waste pickup right from your home.",
    image: "images/image2.jpg", 
    link: "/services/residential-pickup",
  },
  {
    title: "Commercial Services",
    description: "Efficient waste solutions for businesses.",
    image: "images/bus.jpeg", 
    link: "/services/commercial-services",
  },
  {
    title: "Recycling Options",
    description: "Eco-friendly recycling options for all.",
    image: "images/recyler.jpg", 
    link: "/services/recycling-options",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">
        Services Offered
      </h2>
      <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
            <img src={service.image} alt={service.title} className="object-cover w-full h-48" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button
                onClick={openModal}
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">Sign Up to Learn More</h2>
            <p className="mt-2 text-gray-600">Please sign up to get more information about our services.</p>
            {/* Add your sign-up form or sign-up component here */}
            <button
              onClick={closeModal}
              className="mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

