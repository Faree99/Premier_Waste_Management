import React from "react";

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
              <a
                href={service.link}
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
