import React from "react";
import { Link } from "react-router-dom";

const PromptInput = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Enter Your Creative Prompt</h2>
        <textarea
          className="w-full h-32 p-4 bg-gray-700 rounded text-sm text-white"
          placeholder="Example: Create a video showing a futuristic cityscape with flying cars and drones..."
        ></textarea>
         <Link   to="/video-solution">
        <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded">Submit Prompt</button>
         </Link>
      </div>
    </div>
  );
};

export default PromptInput;
