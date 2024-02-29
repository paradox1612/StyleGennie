import React from 'react';
import Homescr1 from "../images/home-scr-1.png";
import Homescr2 from "../images/home-scr-2.png";
import Homescr3 from "../images/home-scr-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-blue-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">About Style Gennie</h2>
        <p className="text-lg mb-6">Style Gennie revolutionizes the way you shop for clothes by harnessing the power of Gen AI technology. Bid farewell to endless scrolling and overwhelming choices – with Style Gennie, finding the perfect outfit is a breeze.</p>
        <p className="text-lg mb-6">Style Gennie is more than just a fashion app – it's your dedicated style companion, here to make shopping fun, effortless, and personalized just for you. Say hello to stress-free shopping and hello to your best-dressed self with Style Gennie today!</p>
        
        {/* Conditionally render slider on mobile devices */}
        <div className="hidden md:block">
          {/* Display images as a row on medium and larger devices */}
          <div className="flex justify-center space-x-4">
            <img src={Homescr1} alt="Home Screen 1" className="h-64 rounded-lg" />
            <img src={Homescr2} alt="Home Screen 2" className="h-64 rounded-lg" />
            <img src={Homescr3} alt="Home Screen 3" className="h-64 rounded-lg" />
          </div>
        </div>
        
        <div className="md:hidden">
          {/* Display slider on small devices */}
          <Slider {...settings}>
            <div>
              <img src={Homescr1} alt="Home Screen 1" className="h-64 rounded-lg" />
            </div>
            <div>
              <img src={Homescr2} alt="Home Screen 2" className="h-64 rounded-lg" />
            </div>
            <div>
              <img src={Homescr3} alt="Home Screen 3" className="h-64 rounded-lg" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
