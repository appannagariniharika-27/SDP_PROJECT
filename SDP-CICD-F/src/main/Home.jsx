import React, { useState } from 'react';
import "./styles/Home.css";
import Footer from './Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <h2>Manage Online Workshops & Training Sessions</h2>
          <p>
            Design a web application to organize and conduct online workshops.<br />
            Handle registration, scheduling, and interactive features for effective learning.
          </p>
          <a href="/userlogin" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h3>Platform Features</h3>
        <ul>
          <li>
            <strong>Admin:</strong> Organize workshop schedules, manage registrations, upload training materials.
          </li>
          <li>
            <strong>User:</strong> Register for workshops, participate in sessions, access post-training resources.
          </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <h3>How It Works</h3>
        <ol>
          <li>Admin creates and schedules workshops</li>
          <li>Users register for sessions</li>
          <li>Participate in live training</li>
          <li>Access recordings & resources later</li>
        </ol>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h3>What Our Users Say</h3>
        <blockquote>
          "This platform helped me upskill quickly with interactive workshops!"
        </blockquote>
        <cite>- Priya Sharma</cite>
      </section>

      {/* Description Section */}
      <section id="description" className="description text-center">
        <p>
          We provide a seamless way to manage and attend online workshops for skill development.
        </p>
        <p>
          Empowering admins to manage training and users to learn effectively.
        </p>
      </section>

      {/* Contact & Support Section */}
      <section id="contact">
        <div className="contact-container">
          <h3>Need Help?</h3>
          <p>Have a question? Describe your issue below, and our support team will assist you.</p>
          <form>
            <input type="text" id="query" name="query" placeholder="Enter your query..." required />
            <button type="submit" className="hero-btn">Submit & Contact Support</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
