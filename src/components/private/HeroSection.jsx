import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
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
      video: 'images/video5.mov',
    },
    {
      video: 'images/video2.mp4',
    },
    {
      video: 'images/video4.mp4',
    }
  ];
  

  return (
    <section className="relative h-[85vh] overflow-hidden bg-center bg-cover">    
<Slider {...settings}>
{slides.map((slide, index) => (
  <div key={index} className="relative flex items-center justify-center h-screen">
    {/* Background Video */}
    <video 
      src={slide.video} 
      autoPlay 
      loop 
      muted 
      className="absolute inset-0 w-full h-full  object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div> 

     {/* Content */}
     <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white md:px-8">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
          Efficient Waste Management at Your Fingertips
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Connect with your nearest waste management providers effortlessly.
        </p>
        <a href="/services" className="px-6 py-3 font-medium text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-600">
          Find Your Service
        </a>
      </div>
  </div>
))}
</Slider>
</section>

  );
};

export default HeroSection;
