import React from "react";
import "./UpcomingEvent.css";
import Button from "./Button";

function ChefRecommended() {
  return (
    <section id="chef" className="chef-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side - Text */}
          <div className="col-md-6 text-center text-md-start">
            <h3 className="fw-bold mb-3 text-dark display-6 chef-title">
              Chef’s Recommendation
            </h3>
            <p className="text-muted fs-5 mb-4">
              Experience the artistry of our head chef — a perfect blend of
              taste, texture, and presentation in every dish crafted with passion.
            </p>

            <Button value="Order Now" href="/menu" />
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div className="chef-image-wrapper shadow-lg rounded overflow-hidden">
              <img
                alt="Chef Recommended"
                src="/image/Chef Recommended.jpg"
                className="img-fluid chef-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ChefRecommended;
