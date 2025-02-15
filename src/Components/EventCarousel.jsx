import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const EventCarousel = () => {
  const images = [
    '/images/poster1.jpg',
    '/images/herosectionbg.jpeg',
  ];

  return (
    <div className="w-full mx-auto mt-6 px-3 h-[300px] ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div key={index} className="h-[300px] flex justify-center items-center">
            <img 
              src={img} 
              alt={`Event Poster ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default EventCarousel;
