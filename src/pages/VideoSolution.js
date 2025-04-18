import React from "react";

const VideoSolution = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-900 min-h-screen text-white">
      {/* Image */}
      <img
        src="/video-ui.png"
        alt="Video Solution"
        className="rounded-lg mb-6 max-w-full max-h-[400px] shadow-lg"
      />

      {/* Progress Bar */}
      <div className="w-full max-w-xl h-2 bg-gray-300 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-red-600 w-[40%] transition-all duration-300"></div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 px-2">
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Play</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Pause</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Rewind</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Forward</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Download</button>
      </div>
    </div>
  );
};

export default VideoSolution;
