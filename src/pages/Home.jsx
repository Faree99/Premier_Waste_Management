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
    <section className="py-20 bg-white">
  <div className="grid max-w-5xl grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-3">
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
  <div className="mt-10 text-center">
    <Link to="/services" className="px-4 py-4 text-white bg-green-500 rounded hover:bg-green-700">
      Learn More About Our Services
    </Link>
  </div>
</section>

      <About />
      <Howitworks />
      <Directory />

      {/* <section className="py-20 bg-gray-100">
        <div className="max-w-5xl px-4 mx-auto">
          <h3 className="mb-6 text-3xl font-semibold text-center">What Our Users Say</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="italic text-gray-700">"The waste management solutions provided by this platform are exceptional! Scheduling pickups is so easy!"</p>
              <p className="mt-2 font-semibold">- Janet A.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="italic text-gray-700">"Thanks to their diverse dumpster sizes, we can manage our waste effectively and sustainably."</p>
              <p className="mt-2 font-semibold">- Oloruntobi A.</p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
  <h2 className="mb-4 text-3xl font-bold">Latest News</h2>
  <div className="space-y-4">
    {/* News Item 1 */}
    <div className="p-4 bg-green-100 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Renewable Energy Projects</h3>
      <p className="text-gray-600">
        The state aims to shut down the Olusosun and Solous dumpsites by the end of 2024 to transition them into renewable energy stations.
      </p>
      <hr className="my-2 border-t border-gray-300" />
      <a href="https://guardian.ng/news/lagos-to-shut-olusosun-other-dumpsite-for-waste-to-energy-projects/" className="text-green-500 hover:underline">Read more</a>
    </div>
  
    {/* News Item 2 */}
    <div className="p-4 bg-green-100 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Transforming Landfills into Treatment Facilities</h3>
      <p className="text-gray-600">
        The Lagos State government plans to decommission the Olusosun and Solus landfills as part of its sustainable strategy.
      </p>
      <hr className="my-2 border-t border-gray-300" />
      <a href="https://guardian.ng/news/lagos-to-convert-olusosun-solus-landfills-into-treatment-facilities/" className="text-green-500 hover:underline">Read more</a>
    </div>
    {/* News Item 3 */}
    <div className="p-4 bg-green-100 rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">Investment in Waste Management Infrastructure</h3>
      <p className="text-gray-600">
        Nigeria has signed a €40 million contract with German companies to enhance waste logistics in Lagos.
      </p>
      <hr className="my-2 border-t border-gray-300" />
      <a href="https://businessday.ng/news/article/lagos-to-shut-olusosun-other-dumpsite-for-waste-to-energy-projects/" className="text-green-500 hover:underline">Read more</a>
    </div>
    
  </div>
</div>

    </>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
  className="p-6 bg-gray-100 rounded-lg shadow-lg"
  whileHover={{ scale: 1.05 }} // Scale up on hover
  initial={{ opacity: 0, y: 20 }} // Initial state for animation
  animate={{ opacity: 1, y: 0 }} // Final state for animation
  transition={{ duration: 0.5 }} // Animation duration
>
  <div className="mb-4 text-4xl">{icon}</div>
  <h3 className="mb-2 text-xl font-semibold">{title}</h3>
  <p className="text-gray-600">{description}</p>
</motion.div>
);

export default Home;
