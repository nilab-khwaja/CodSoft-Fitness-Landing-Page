import React from "react";
import { FaDumbbell, FaUsers, FaAppleAlt } from "react-icons/fa"; // Example icons

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaDumbbell className="service-icon" />
            <h3>Personal Training</h3>
            <p>Work one-on-one with our expert trainers to reach your fitness goals faster.</p>
          </div>
          <div className="service-card">
            <FaUsers className="service-icon" />
            <h3>Group Classes</h3>
            <p>Join our fun and motivating group classes designed for all fitness levels.</p>
          </div>
          <div className="service-card">
            <FaAppleAlt className="service-icon" />
            <h3>Nutrition Counseling</h3>
            <p>Receive personalized nutrition advice to complement your fitness journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
