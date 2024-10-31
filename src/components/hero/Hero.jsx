import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      video: '/images/video1.mp4', 
      title: "Clean Up the World, Starting with Your Waste",
      description: "Join us in keeping the environment clean by easily managing your waste pickups and recycling efforts.",
    },
    {
      image: 'images/dump.jpg',
      title: "Reduce, Reuse, Recycle!",
      description: "Every small effort counts in making our planet a better place.",
    },
    {
      video: '/images/video4.mp4',
      title: "Sustainable Solutions for a Greener Tomorrow",
      description: "Discover innovative ways to manage your waste effectively.",
    },
  ];
  
  return (
    <section className="relative h-[85vh] overflow-hidden bg-center bg-cover">    
<Slider {...settings}>
  {slides.map((slide, index) => (
    <div key={index} className="relative flex items-center justify-center h-screen">
      {/* Background Image */}
      {/* <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" /> */}
      {slide.video ? (
        <video 
          src={slide.video} 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img 
          src={slide.image} 
          alt={slide.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white md:px-8">
      <p className="mb-2 text-lg italic text-yellow-400">Discover Eco-Friendly Waste Solutions</p>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{slide.title}</h1>
              <p className="mb-6 text-lg md:text-xl">{slide.description}</p>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 animate-slide-in">
            <Link to="/public-sector" className="px-6 py-3 text-white bg-green-600 rounded shadow-lg hover:bg-green-700">
              Explore Public Services
            </Link>
            <Link to="/private-sector" className="px-6 py-3 text-white bg-orange-500 rounded shadow-lg hover:bg-orange-700">
              Find Private Solutions
            </Link>
          </div>

            </div>
    </div>
  ))}
</Slider>


    </section>
  );
};

export default Hero;




