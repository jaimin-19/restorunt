import React from "react";
import "./Events.css";
import UpcomingEvent from "../components/UpcomingEvent";
import Button from "../components/Button";

const Events = () => {
    return (
        <div className="events-page">
            {/* 🔹 Page Header */}
            <header className="events-header">
                <div className="container text-center">
                    <h1 className="page-title display-3 fw-bold text-white">Events</h1>
                    <p className="page-subtitle text-white-50 fs-5">
                        Join us for unforgettable nights and special occasions
                    </p>
                </div>
            </header>

            {/* 🔹 Upcoming Events (Reused) */}
            <div className="py-5">
                <UpcomingEvent />
            </div>

            {/* 🔹 Private Dining / Booking */}
            <section className="private-events-section py-5">
                <div className="container">
                    <div className="row align-items-center bg-white rounded shadow-lg overflow-hidden">
                        <div className="col-lg-6 p-0">
                            <img
                                src="/image/event-bg.jpg"
                                alt="Private Dining"
                                className="img-fluid h-100 w-100 object-fit-cover"
                                style={{ minHeight: "400px" }}
                            />
                        </div>
                        <div className="col-lg-6 p-5">
                            <h2 className="fw-bold mb-3">Host Your Private Party</h2>
                            <p className="text-muted mb-4">
                                Looking for the perfect venue for your birthday, anniversary, or
                                corporate event? Our exclusive private dining area offers a
                                luxurious atmosphere, customized menus, and dedicated service to
                                make your celebration truly special.
                            </p>
                            <ul className="list-unstyled mb-4 text-muted">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Customizable Menu Options
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Private & Semi-Private Areas
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Dedicated Event Staff
                                </li>
                            </ul>
                            <Button value="Book an Event" href="/reservation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Newsletter / Updates */}
            <section className="newsletter-section py-5 text-center text-white">
                <div className="container">
                    <h2 className="fw-bold mb-3">Stay Updated</h2>
                    <p className="mb-4 opacity-75">
                        Subscribe to our newsletter to get the latest updates on upcoming
                        events and special offers.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control p-3 rounded-start-pill"
                                    placeholder="Enter your email"
                                    aria-label="Recipient's email"
                                />
                                <button
                                    className="btn btn-warning px-4 fw-bold rounded-end-pill"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
