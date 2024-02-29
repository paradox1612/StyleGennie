import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import AboutUs from '../components/AboutUs'; // Importing the About Us component
//import ContactForm from '../components/ContactForm'; // Importing the Contact Form component
import ContactUS from '../components/ContactUS'
//import Title from '../components/Title';

import ImageSlideshow from '../components/ImageSlider';


const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-800">Welcome to Style Gennie</h1>
          <p className="text-lg md:text-xl mb-8">Your Personalized Fashion Companion</p>
          {/*<Title/>*/}
          <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full inline-block font-semibold transition duration-300">Discover Now</Link>
        </div>
      </section>

       {/* Animation Section */}
      <ImageSlideshow/>
     

      {/* About Us Section */}
      <AboutUs />

      {/* How it Works Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">How Style Gennie Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personalized Prompts */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Personalized Prompts</h3>
              <p className="text-lg mb-6">Share your style preferences, body shape, and occasion, and our Gen AI algorithms will analyze your inputs to understand your unique tastes and needs.</p>
            </div>
            {/* Tailored Recommendations */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Tailored Recommendations</h3>
              <p className="text-lg mb-6">Get curated selections of clothing perfectly suited to your style profile, from chic minimalism to classic elegance.</p>
            </div>
            {/* Diverse Variety */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Diverse Variety</h3>
              <p className="text-lg mb-6">Explore a wide array of styles, colors, and brands handpicked by our fashion experts to cater to your every fashion whim.</p>
            </div>
            {/* Effortless Decision-Making */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Effortless Decision-Making</h3>
              <p className="text-lg mb-6">With our user-friendly interface, selecting your favorite pieces is a breeze. Swipe through options, like what you love, and pass on what doesn't match your style.</p>
            </div>
            {/* Streamlined Shopping Experience */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Streamlined Shopping Experience</h3>
              <p className="text-lg mb-6">Once you've found your perfect picks, seamlessly purchase them directly through Style Gennie with trusted retailers for a smooth and secure shopping experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
     
      <ContactUS/>
      {/* Footer Section */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 text-center">
        <p className="text-sm text-gray-600">© 2024 Style Gennie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
