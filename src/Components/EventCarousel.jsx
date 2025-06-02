import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const EventCarousel = () => {
  const images = [
    
    '/images/poster1.jpg',
   
    '/images/12.jpg',
     './images/image3.jpg',
    
  ];

        return (
          <div className="w-full mx-auto mt-6 px-3 h-[350px]  ">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                delay={3000}
              >
                    {images.map((img, index) => (
                      <div key={index} className="h-[350px] flex justify-center items-center">
                        <img 
                          src={img} 
                          alt={images} 
                          className="w-full h-full object-cover rounded-lg shadow-lg" 
                        />
                      </div>
              ))}
            </Carousel>
            
          </div>
        );
};

export default EventCarousel;
