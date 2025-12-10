import React from "react";
import "./FoodMenuSection.css";

function FoodMenuSection() {
  return (
    <>
      <section id="food-menu" className="food-menu-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold text-uppercase title-text">
            View Our Menu
          </h2>
          <input
            type="text"
            className="form-control food-search-bar mb-5 mx-auto"
            placeholder="Search..."
          />

          <div className="row justify-content-center g-4">
            <div className="col-6 col-lg-3">
              <div className="food-card">
                <div className="food-img">
                  <img src="image/Appetizers.jpg" alt="Appetizers" />
                </div>
                <p className="food-title">Appetizers</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="food-card">
                <div className="food-img">
                  <img src="image/Main Courses.jpg" alt="Main Courses" />
                </div>
                <p className="food-title">Main Courses</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="food-card">
                <div className="food-img">
                  <img src="image/Drinks.jpg" alt="Drinks" />
                </div>
                <p className="food-title">Drinks</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="food-card">
                <div className="food-img">
                  <img src="image/Dessert.jpg" alt="Dessert" />
                </div>
                <p className="food-title">Desserts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FoodMenuSection;
