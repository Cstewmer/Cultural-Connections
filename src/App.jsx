import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import MandarinTutoring from './MandarinTutoring';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="navbar-title">Cultural Connections</Link>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} end>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MandarinTutoring />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

