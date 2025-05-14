import React, { useState, useEffect } from 'react';

const heroImages = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg',
    '/images/7.jpeg',
    '/images/8.jpeg',
    '/images/9.jpeg',
    '/images/10.jpeg'
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative h-screen">
      {/* Carousel */}
      <div className="carousel h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            Welcome to French Finish Pro
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Excellence in Craftsmanship, Commitment to Quality
          </p>
          <a 
            href="#contact"
            className="btn btn-primary bg-amber-700 hover:bg-amber-800"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-16 relative">
          <div className="absolute inset-0 bg-white bg-opacity-30 rounded-full"></div>
          <div 
            className="absolute top-0 bg-white rounded-full w-full animate-[scrollDown_2s_infinite]"
            style={{
              height: '30%',
              animation: 'scrollDown 2.5s infinite',
              '@keyframes scrollDown': {
                '0%': { top: '0%' },
                '100%': { top: '70%' }
              }
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;