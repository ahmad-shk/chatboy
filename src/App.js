import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import PromptInput from "./pages/PromptInput";
import VideoSolution from "./pages/VideoSolution";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prompt-input" element={<PromptInput />} />
          <Route path="video-solution" element={<VideoSolution />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;