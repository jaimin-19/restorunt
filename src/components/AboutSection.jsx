import React from "react";
import "./AboutSection.css";
import Button from "./Button";

const AboutSection = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <img
                src="/image/about-restaurant.jpg"
                alt="Restaurant Interior"
                className="about-image"
              />
              <div className="about-overlay" />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="col-lg-6 ps-lg-4">
            <div className="about-content">
              <span className="section-label">About Us</span>
              <h2 className="about-title fw-bold">
                Welcome to <span className="gradient-text">JK Restaurant</span>
              </h2>
              <p className="about-desc">
                At JK Restaurant, we believe in serving more than just food — we serve passion, tradition, and love on every plate. With over 10 years of culinary excellence, our chefs craft authentic dishes using the finest ingredients sourced locally.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-leaf" />
                  </div>
                  <div className="feature-text">
                    <h5>Fresh Ingredients</h5>
                    <p>Sourced daily from local farms</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-chef-hat" />
                  </div>
                  <div className="feature-text">
                    <h5>Expert Chefs</h5>
                    <p>Trained in international cuisines</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-heart" />
                  </div>
                  <div className="feature-text">
                    <h5>Made with Love</h5>
                    <p>Every dish prepared with care</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button value="Learn More" href="/about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;