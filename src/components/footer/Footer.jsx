import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    // <footer className="py-12 text-white bg-gray-800">
    //         <div className="grid max-w-6xl grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2">
                
    //             Contact Information
    //             <div>
    //                 <h3 className="mb-4 text-2xl font-semibold">Contact Support</h3>
    //                 <p className="mb-2">Need help navigating or learning about our services? Reach out to us!</p>
                    
    //                 <ul className="space-y-2">
    //                     <li>
    //                         <span className="font-semibold">Address:</span> 123 Waste Management St., Green City
    //                     </li>
    //                     <li>
    //                         <span className="font-semibold">Email:</span> support@wastemanage.com
    //                     </li>
    //                     <li>
    //                         <span className="font-semibold">Phone:</span> +123-456-7890
    //                     </li>
    //                 </ul>
    //             </div>

    //             {/* Contact Form */}
    //             <div>
    //                 <h3 className="mb-4 text-2xl font-semibold">Get in Touch</h3>
    //                 <form className="space-y-4">
    //                     <div>
    //                         <label className="block mb-2 text-gray-300" htmlFor="name">Name</label>
    //                         <input 
    //                             type="text" 
    //                             id="name" 
    //                             className="w-full px-4 py-2 text-white placeholder-gray-400 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
    //                             placeholder="Your Name"
    //                             required 
    //                         />
    //                     </div>
    //                     <div>
    //                         <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
    //                         <input 
    //                             type="email" 
    //                             id="email" 
    //                             className="w-full px-4 py-2 text-white placeholder-gray-400 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
    //                             placeholder="Your Email"
    //                             required 
    //                         />
    //                     </div>
    //                     <div>
    //                         <label className="block mb-2 text-gray-300" htmlFor="message">Message</label>
    //                         <textarea 
    //                             id="message" 
    //                             className="w-full px-4 py-2 text-white placeholder-gray-400 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
    //                             rows="4" 
    //                             placeholder="Your Message"
    //                             required 
    //                         ></textarea>
    //                     </div>
    //                     <button 
    //                         type="submit" 
    //                         className="w-full py-2 font-semibold text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
    //                     >
    //                         Send Message
    //                     </button>
    //                 </form>
    //             </div>
    //         </div>

    //         {/* Footer Bottom */}
    //         <div className="pt-6 mt-12 text-center text-gray-400 border-t border-gray-700">
    //             <p>&copy; {new Date().getFullYear()} Waste Management Services. All rights reserved.</p>
    //         </div>
    //     </footer>
    <footer className="py-10 text-gray-300 bg-gray-800">
      <div className="container grid grid-cols-1 gap-8 px-5 mx-auto md:px-10 lg:px-20 md:grid-cols-2 lg:grid-cols-4">
        {/* About Us */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
          <p className="text-sm">
            We are committed to providing exceptional service and value to our customers. Our aim is to help you achieve your goals with ease and confidence.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Links</h3>
          <ul className="space-y-2">
            <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link to="/aboutus" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/services" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
          <p className="text-sm">1234 Street Name, City, Country</p>
          <p className="text-sm">Email: info@wastemanagement.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="mt-8 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Premier Waste Management Services. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;