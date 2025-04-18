import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-500 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-2 md:mb-0">PromptToVideoAI</h1>
        <nav className="space-x-0 md:space-x-4 flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/prompt-input" className="hover:underline">Prompt Input</Link>
          <Link to="/video-solution" className="hover:underline">Video Solution</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 text-gray-200 py-6 px-8 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <p>About Us</p>
          <p>Contact</p>
          <p>Support</p>
        </div>
        <div className="md:text-right">
          <h4 className="text-white font-semibold mb-2">Contact Information</h4>
          <p>Email: <a href="mailto:support@prompttovideoai.com" className="underline">support@prompttovideoai.com</a></p>
          <p>Phone: +1 800 123 4567</p>
        </div>
      </footer>
    </div>
  );
}