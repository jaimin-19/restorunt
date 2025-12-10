import React, { useState } from "react";
import "./FoodDetail.css";

export const FoodDetail = () => {
  const [count, setCount] = useState(0);

  // Prevent negative count
  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <section className="food-detail-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Food Info */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold text-dark mb-3">Delicious Pizza</h2>
            <p className="text-muted fs-5 mb-3">
              A cheesy delight topped with fresh vegetables and herbs.
              Crispy crust and perfect for every occasion!
            </p>
            <h4 className="price-tag mb-4">$12.99</h4>

            {/* Quantity Counter */}
            <div className="d-flex align-items-center mb-4">
              <button
                className="btn btn-outline-secondary rounded-circle counter-btn"
                onClick={decreaseCount}
              >
                <i className="fas fa-minus"></i>
              </button>

              <span className="mx-3 fs-4 fw-semibold">{count}</span>

              <button
                className="btn btn-outline-secondary rounded-circle counter-btn"
                onClick={() => setCount(count + 1)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            {/* Order Button */}
            <button className="btn btn-order px-4 py-2 fw-semibold">
              <i className="fas fa-shopping-cart me-2"></i> Order Now
            </button>
          </div>

          {/* Food Image */}
          <div className="col-md-6 text-center">
            <div className="food-image-wrapper shadow-lg rounded">
              <img
                src="https://images.unsplash.com/photo-1601924638867-3ec2f94d6227?auto=format&fit=crop&w=600&q=80"
                alt="Delicious Pizza"
                className="img-fluid rounded"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
