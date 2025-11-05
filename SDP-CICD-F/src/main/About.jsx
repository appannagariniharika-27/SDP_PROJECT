import React from 'react';
import "./styles/About.css";

export default function About() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="about text-center py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold mb-6">
          About Us
        </h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          We provide an easy and interactive way to organize and attend online workshops and training sessions.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          Our platform helps <strong>admins</strong> schedule sessions, manage participants, and share resources, while <strong>users</strong> can register, learn, and access recordings anytime.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you're looking to upskill or conduct a training program, we make the process simple, secure, and effective.
        </p>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-slate-100 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          To empower learners and trainers with a seamless platform that connects knowledge with opportunity.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We believe in making skill development accessible, interactive, and future-ready.
        </p>
      </section>
    </div>
  );
}
