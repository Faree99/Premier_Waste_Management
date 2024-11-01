import { div } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Introduction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: 'images/pubic.jpg',
    },
    {
      image: 'images/public2.jpg',
    },
    {
      image: 'images/public3.jpg',
    },
    {
      image: 'images/public4.jpg',
    }
  ];

  return (
    
    <section className="relative h-[85vh] overflow-hidden bg-center bg-cover ">    
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative flex items-center justify-center h-screen ">
          {/* Background Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div> 
    
          {/* Content */}
              <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white md:px-8">
               <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Welcome to Public Waste Management Services</h1>
               <p className="text-lg">Helping you manage your waste efficiently and sustainably</p>
               <p className="mb-8 text-lg">Join us today and experience the difference</p>
               <Link to="/aboutus" className="px-6 py-3 text-white transition bg-green-700 rounded-full hover:bg-green-500">
                 Learn More
               </Link>
             </div>
        </div>
      ))}
    </Slider>
    
    
        </section>
  );
}

export default Introduction;

