import React from 'react';
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Howitworks from "../components/howitworks/Howitworks";
import Directory from "../components/directory/Directory";
// import Footer from "../components/footer/Footer";
import MapComponent from '../components/directory/MapComponent'; 
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from "../components/navbar/Navbar";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
    <section className="bg-white py-10">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    <FeatureItem
      icon="🚛"
      title="Diverse Dumpster Sizes"
      description="Choose from various sizes to fit your waste needs."
    />
    <FeatureItem
      icon="🗑️"
      title="Reliable Garbage Pickup"
      description="Regularly scheduled pickups keep your environment clean."
    />
    <FeatureItem
      icon="📅"
      title="Flexible Collection Schedule"
      description="Easily schedule pickups that suit your lifestyle."
    />
  </div>
  <div className="text-center mt-10">
    <Link to="/services" className="bg-green-500 text-white py-4 px-4 rounded hover:bg-green-700">
      Learn More About Our Services
    </Link>
  </div>
</section>

      <About />
      <Howitworks />
      <Directory />

      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-6">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"The waste management solutions provided by this platform are exceptional! Scheduling pickups is so easy!"</p>
              <p className="font-semibold mt-2">- Jane D.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"Thanks to their diverse dumpster sizes, we can manage our waste effectively and sustainably."</p>
              <p className="font-semibold mt-2">- John S.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
  <h2 className="text-3xl font-bold mb-4">Latest News</h2>
  <div className="space-y-4">
    {/* News Item 1 */}
    <div className="p-4 bg-green-100 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Renewable Energy Projects</h3>
      <p className="text-gray-600">
        The state aims to shut down the Olusosun and Solous dumpsites by the end of 2024 to transition them into renewable energy stations.
      </p>
      <hr className="border-t border-gray-300 my-2" />
      <a href="https://guardian.ng/news/lagos-to-shut-olusosun-other-dumpsite-for-waste-to-energy-projects/" className="text-green-500 hover:underline">Read more</a>
    </div>
  
    {/* News Item 2 */}
    <div className="p-4 bg-green-100 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Transforming Landfills into Treatment Facilities</h3>
      <p className="text-gray-600">
        The Lagos State government plans to decommission the Olusosun and Solus landfills as part of its sustainable strategy.
      </p>
      <hr className="border-t border-gray-300 my-2" />
      <a href="https://guardian.ng/news/lagos-to-convert-olusosun-solus-landfills-into-treatment-facilities/" className="text-green-500 hover:underline">Read more</a>
    </div>
    {/* News Item 3 */}
    <div className="p-4 bg-green-100 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Investment in Waste Management Infrastructure</h3>
      <p className="text-gray-600">
        Nigeria has signed a €40 million contract with German companies to enhance waste logistics in Lagos.
      </p>
      <hr className="border-t border-gray-300 my-2" />
      <a href="https://businessday.ng/news/article/lagos-to-shut-olusosun-other-dumpsite-for-waste-to-energy-projects/" className="text-green-500 hover:underline">Read more</a>
    </div>
    
  </div>
</div>

    </>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
  className="bg-gray-100 rounded-lg p-6 shadow-lg"
  whileHover={{ scale: 1.05 }} // Scale up on hover
  initial={{ opacity: 0, y: 20 }} // Initial state for animation
  animate={{ opacity: 1, y: 0 }} // Final state for animation
  transition={{ duration: 0.5 }} // Animation duration
>
  <div className="text-4xl mb-4">{icon}</div>
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-gray-600">{description}</p>
</motion.div>
);

export default Home;
