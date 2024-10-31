import React, { useState } from 'react';
import Navbar from "../components/navbar/Navbar";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., sending data to an API)
    alert('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-center">
        We value your feedback and inquiries. Please fill out the form below, and our team will get back to you as soon as possible.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white p-6 rounded shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

  {/* Image */}
  <div className="mb-4">
    <img
      src="/images/guy.jpg" 
      alt="Contact Icon"
      className="w-full h-[300px] mx-auto"
    />
  </div>

  <p className="text-gray-600 mb-2">
    Email: <a href="mailto:support@example.com" className="text-blue-500 hover:underline">info@wastemanagement.com</a>
  </p>
  <p className="text-gray-600 mb-2">
    Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a>
  </p>
  <p className="text-gray-600 mb-2">Address: 123 Waste Management Ave, City, State, Zip Code</p>

  <h3 className="text-xl font-semibold mt-4 mb-2">Follow Us</h3>
  <div className="flex space-x-4">
    <a href="#" className="text-blue-500 hover:underline">Facebook</a>
    <a href="#" className="text-blue-500 hover:underline">Twitter</a>
    <a href="#" className="text-blue-500 hover:underline">Instagram</a>
  </div>
</div>

      </div>

      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="h-64 rounded overflow-hidden shadow-md">
          {/* Replace with an actual map iframe or component */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509029!2d144.9537353153184!3d-37.81720997975155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f4a7c29%3A0x4b734ef9aef3e53e!2sYour%20Location!5e0!3m2!1sen!2sng!4v1618304906704!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
