// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-blue-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Contact Us</h2>
        <p className="text-lg mb-6">Have questions or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <input type="text" placeholder="Your Name" className="bg-gray-200 border border-gray-300 rounded-full py-3 px-4 w-full focus:outline-none focus:bg-white" />
          </div>
          <div className="mb-6">
            <input type="email" placeholder="Your Email" className="bg-gray-200 border border-gray-300 rounded-full py-3 px-4 w-full focus:outline-none focus:bg-white" />
          </div>
          <div className="mb-6">
            <textarea rows="5" placeholder="Your Message" className="bg-gray-200 border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:bg-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full inline-block font-semibold transition duration-300">Send Message</button>
        </form>
        {/* Placeholder for picture */}
        <div className="h-64 bg-gray-300 rounded-lg mt-8"></div>
      </div>
    </section>
  );
};

export default ContactForm;
