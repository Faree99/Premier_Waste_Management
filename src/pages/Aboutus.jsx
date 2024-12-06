import React from 'react';
import Navbar from "../components/navbar/Navbar";



const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center">About Us</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700">
          At EcoTrade Waste Management, our mission is to promote sustainable waste management practices across Nigeria. We are dedicated to providing innovative solutions that help individuals and businesses dispose of their waste responsibly while protecting the environment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
        <p className="text-gray-700">
          We envision a cleaner, greener Nigeria where waste is minimized, and recycling is the norm. Through education, community engagement, and partnerships, we aim to transform waste management into a sustainable and efficient process that benefits all.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Values</h2>
        <ul className="text-gray-700 list-disc list-inside">
          <li>💚 <span className="font-bold">Sustainability</span>: We prioritize eco-friendly practices in all our operations.</li>
          <li>🌍 <span className="font-bold">Community</span>: We believe in the power of community to effect positive change.</li>
          <li>📚 <span className="font-bold">Education</span>: We are committed to raising awareness about waste management issues.</li>
          <li>🤝 <span className="font-bold">Integrity</span>: We operate with honesty and transparency in everything we do.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">What We Do</h2>
        <p className="text-gray-700">
          Our platform offers a range of services designed to facilitate effective waste management:
        </p>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>📦 <span className="font-bold">Waste Pickup Services</span>: We connect users with reliable waste management companies for efficient waste collection.</li>
          <li>♻️ <span className="font-bold">Recycling Programs</span>: We promote recycling initiatives to reduce waste sent to landfills.</li>
          <li>📝 <span className="font-bold">Guidance and Resources</span>: We provide detailed information on proper waste disposal methods and local regulations.</li>
          <li>🗣️ <span className="font-bold">Community Engagement</span>: We organize workshops and events to educate communities about sustainable waste practices.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Join Us</h2>
        <p className="text-gray-700">
          We invite you to join our mission for a cleaner, more sustainable future. Whether you are an individual looking to dispose of waste responsibly, a business seeking eco-friendly solutions, or a community organization wanting to make a difference, we are here to help.
        </p>
        <p className="mt-4 text-gray-700">
          Together, we can make a significant impact in managing waste and protecting our environment.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-700">
          For more information about our services or to get involved, please visit our <a href="/contactus" className="text-blue-500 hover:underline">Contact Us</a> page.
        </p>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
