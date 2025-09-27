// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ListLayout from "./pages/ListLayout";
import ListLayoutDetail from "./pages/ListLayoutDetail";
import Agent from "./pages/Agent";
import AgentDetail from "./pages/AgentDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  // loader har page refresh pe chale
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        {/* Home pages */}
        <Route path="/" element={<Home />} />
        <Route path="/ListLayout" element={<ListLayout />} />
        <Route path="/ListLayout/:id" element={<ListLayoutDetail />} />
        <Route path="/Agent" element={<Agent />} />
        <Route path="/Agent/:id" element={<AgentDetail />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
