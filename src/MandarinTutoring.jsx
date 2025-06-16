import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function MandarinTutoring() {
  return (
    <div className="mandarin-container">
      <div className="mandarin-card-wrapper">
        <div className="cc-header">Cultural Connections</div>
        <div className="mandarin-title">
          <h1 className="mandarin-highlight">Online Mandarin Tutoring</h1>
        </div>
        <p className="mandarin-subtitle">Work with an accomplished Mandarin tutor</p>

        <div className="mandarin-card">
          <h2 className="mandarin-card-title">How we help</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
          <a href="mailto:Nielson.Alaina@gmail.com" className="mandarin-contact-sticker">CONTACT ME!</a>
          <div className="mandarin-email">Email: Nielson.Alaina@gmail.com</div>
          <div className="mandarin-email">Phone: 801-824-5499</div>
        </div>
      </div>
    </div>
  );
}
