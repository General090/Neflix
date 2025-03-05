import React from "react";
import { Monitor } from "lucide-react"; // Importing a computer icon

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-b from-[#141414] to-[#1F1F1F] text-white p-6 rounded-lg w-64 shadow-lg flex flex-col items-center">
      <div className="text-4xl mb-4 text-red-500">{icon}</div>
      <h3 className="font-semibold text-lg text-center">{title}</h3>
      <p className="text-sm text-gray-300 text-center mt-2">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="flex justify-center gap-6 p-10 bg-black">
      <FeatureCard 
        title="Enjoy on your TV" 
        description="Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        icon={<Monitor size={40} />}
      />
    </div>
  );
};

export default FeaturesSection;
