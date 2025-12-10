import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reservation.css";

export const Reservation = () => {
  return (
    <section className="reservation-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT: Reservation Form */}
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow rounded bg-white">
              <h2 className="fw-bold mb-4 text-uppercase text-center text-dark">
                Table Reservation
              </h2>

              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label fw-semibold">Date*</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="col">
                    <label className="form-label fw-semibold">Time*</label>
                    <input type="time" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Guests*</label>
                  <input type="number" className="form-control" placeholder="No. of Guests" required />
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label fw-semibold">First Name</label>
                    <input type="text" className="form-control" placeholder="John" />
                  </div>
                  <div className="col">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" />
                  </div>
                  <div className="col">
                    <label className="form-label fw-semibold">Phone</label>
                    <input type="tel" className="form-control" placeholder="+1 234 567 890" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Comment</label>
                  <textarea className="form-control" rows="3" placeholder="Any special requests?" style={{ resize: 'none' }}></textarea>

                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-gold px-5 py-2 fw-semibold rounded-pill">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="col-md-6">
            <div className="reservation-image rounded">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                alt="Restaurant Interior"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
