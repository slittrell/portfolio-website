// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { About } from './components/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <Link to="/" className="flex items-center py-4">
                  <span className="font-semibold text-gray-800 text-lg">Portfolio</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/" className="py-4 px-2 text-gray-800 hover:text-blue-500">Home</Link>
                  <Link to="/about" className="py-4 px-2 text-gray-800 hover:text-blue-500">About</Link>
                  <Link to="/projects" className="py-4 px-2 text-gray-800 hover:text-blue-500">Projects</Link>
                  <Link to="/contact" className="py-4 px-2 text-gray-800 hover:text-blue-500">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;