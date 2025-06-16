import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';

export default function About() {
  // about1 is the one with the 'About Me' text, should be on top by default
  const [topPhoto, setTopPhoto] = useState('about1');

  return (
    <div className="mandarin-container">
      <div className="mandarin-card-wrapper">
        <div className="mandarin-header"></div>
        <div className="postcard-desk">
          <button
            className={`postcard-btn${topPhoto === 'about1' ? ' on-top' : ''}`}
            aria-label="Show About Me photo on top"
            onMouseEnter={() => setTopPhoto('about1')}
            onClick={() => setTopPhoto('about1')}
            type="button"
          >
            <img
              src={about1}
              alt="Alaina in Taiwan by the water"
              className="postcard-photo"
              draggable={false}
            />
          </button>
          <button
            className={`postcard-btn${topPhoto === 'about2' ? ' on-top' : ''}`}
            aria-label="Show Taipei 101 photo on top"
            onMouseEnter={() => setTopPhoto('about2')}
            onClick={() => setTopPhoto('about2')}
            type="button"
          >
            <img
              src={about2}
              alt="Alaina in front of Taipei 101"
              className="postcard-photo"
              draggable={false}
            />
          </button>
        </div>
      </div>
    </div>
  );
} 