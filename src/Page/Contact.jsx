import React, { useState } from "react";
import "./Contact.css";
import Button from "../components/Button";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thank you for contacting us! We'll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="contact-page">
            {/* 🔹 Page Header */}
            <header className="contact-header">
                <div className="container text-center">
                    <h1 className="page-title display-3 fw-bold text-white">Contact Us</h1>
                    <p className="page-subtitle text-white-50 fs-5">
                        We'd love to hear from you! Get in touch with us today.
                    </p>
                </div>
            </header>

            {/* 🔹 Contact Info Cards */}
            <section className="contact-info-section py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="info-card text-center p-4 h-100">
                                <div className="icon-box mb-3">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Visit Us</h4>
                                <p className="text-muted">
                                    123 Restaurant Street<br />
                                    Downtown, City 12345<br />
                                    Country
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info-card text-center p-4 h-100">
                                <div className="icon-box mb-3">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Call Us</h4>
                                <p className="text-muted">
                                    Phone: +1 (234) 567-8900<br />
                                    Reservations: +1 (234) 567-8901<br />
                                    Mon - Sun: 11:30 AM - 12:00 AM
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info-card text-center p-4 h-100">
                                <div className="icon-box mb-3">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Email Us</h4>
                                <p className="text-muted">
                                    info@jkrestaurant.com<br />
                                    reservations@jkrestaurant.com<br />
                                    support@jkrestaurant.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Contact Form & Map */}
            <section className="contact-form-section py-5 bg-light">
                <div className="container">
                    <div className="row g-5">
                        {/* Contact Form */}
                        <div className="col-lg-6">
                            <div className="form-wrapper p-4 bg-white rounded shadow-sm">
                                <h2 className="mb-4 fw-bold">Send Us a Message</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="subject" className="form-label">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label">
                                                Your Message *
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                style={{ resize: 'none' }}
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-submit w-100 py-3">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Map & Additional Info */}
                        <div className="col-lg-6">
                            <div className="map-wrapper rounded overflow-hidden shadow-sm mb-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9876543210!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Restaurant Location"
                                ></iframe>
                            </div>

                            <div className="opening-hours p-4 bg-white rounded shadow-sm">
                                <h4 className="fw-bold mb-3">
                                    <i className="bi bi-clock me-2 text-primary"></i>
                                    Opening Hours
                                </h4>
                                <div className="hours-list">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-semibold">Monday - Thursday</span>
                                        <span className="text-muted">11:30 AM - 11:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-semibold">Friday - Saturday</span>
                                        <span className="text-muted">11:30 AM - 12:00 AM</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-semibold">Sunday</span>
                                        <span className="text-muted">11:30 AM - 11:00 PM</span>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <h5 className="fw-bold mb-3">Follow Us</h5>
                                <div className="social-links d-flex gap-3">
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 CTA Section */}
            <section className="cta-section py-5 text-center text-white">
                <div className="container">
                    <h2 className="fw-bold mb-3">Ready to Experience Fine Dining?</h2>
                    <p className="mb-4 fs-5 opacity-75">
                        Reserve your table now or order your favorite dishes online!
                    </p>
                    <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                        <Button value="Make a Reservation" href="/reservation" />
                        <Button value="Order Online" href="/menu" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
