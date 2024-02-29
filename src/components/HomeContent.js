import React from "react";
import ImageSlider from "./ImageSlider"; // Importing the ImageSlider component
import Title from "./Title";
export default function Depth0Frame0() {
  return (
    <div className="flex flex-col justify-start items-center max-w-4xl mx-auto p-4 text-white font-semibold">
      {/* Image Slider */}
      <div className="w-full">
        <ImageSlider />
      </div>

      {/* Content */}
      <div className="text-center">
        {/* Heading: AI-Powered Outfit Suggestions */}
        <p className="text-lg mt-4">
          AI-Powered Outfit Suggestions
        </p>
        
        {/* Description: Explaining the service */}
        <p className="text-base mt-2">
          We use AI to suggest outfits based on your daily routine, weather,
          and personal style.
        </p>

        {/* Button: Call to action for getting started */}
        <button className="w-full py-3 mt-4 rounded-lg bg-blue-500 text-white font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}
