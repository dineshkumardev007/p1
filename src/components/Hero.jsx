import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Empowering Your <span>Digital Growth</span>
        </h1>
        <p>
          We provide cutting-edge IT solutions, web development services,
          cloud support and digital transformation for all business types.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          alt="IT Company"
        />
      </div>
    </section>
  );
};

export default Hero;
