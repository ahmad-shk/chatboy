import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-12 px-4">
      <img 
        src="/banner.png" 
        alt="Banner"
        className="rounded-lg mx-auto w-full max-w-4xl h-auto object-cover"
      />
      <h2 className="text-3xl font-bold mt-6 text-white">
        Transform Your Ideas Into Unique Videos
      </h2>
      <p className="text-gray-300 mt-4">
        Experience the power of AI-driven video creation. Simply input a prompt and let our AI bring your ideas to life.
      </p>
      <Link to="/prompt-input">
        <button className="mt-6 bg-red-600 px-6 py-2 rounded text-white font-semibold hover:bg-red-700">
          Input Your Prompt
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        <FeatureCard
          title="Innovative Technology"
          text="Harness cutting-edge AI algorithms to produce unique video content effortlessly."
          img="/tech.png"
        />
        <FeatureCard
          title="Seamless Integration"
          text="Integrate our AI service into your workflow to enhance productivity and creativity."
          img="/camera.png"
        />
        <FeatureCard
          title="Collaborative Environment"
          text="Work together with your team and the AI to create compelling video stories."
          img="/team.png"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, text, img }) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md text-left">
      <img src={img} alt={title} className="rounded mb-4 w-full h-48 object-cover" />
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}