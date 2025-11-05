import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left - About Section */}
        <div className="footer-section about">
          <h2>Workshops & Training Platform</h2>
          <p>
            A one-stop platform for managing and attending online workshops,
            training sessions, and interactive learning programs.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/userlogin">User Login</Link></li>
            <li><Link to="/adminlogin">Admin Portal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right - Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to get updates on upcoming workshops, training programs,
            and learning resources.
          </p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom - Social Media */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <div className="footer-bottom-text">
          <p>© {new Date().getFullYear()} Workshops & Training Platform. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
