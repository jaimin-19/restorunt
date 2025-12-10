import React from "react";
import "./About.css";
import AboutSection from "../components/AboutSection";
import ChefRecommended from "../components/ChefRecommended";

const About = () => {
    return (
        <div className="about-page">
            {/* 🔹 Page Header */}
            <header className="page-header">
                <div className="container text-center">
                    <h1 className="page-title display-3 fw-bold text-white">Our Story</h1>
                    <p className="page-subtitle text-white-50 fs-5">
                        Tradition, Passion, and Excellence since 2010
                    </p>
                </div>
            </header>

            {/* 🔹 Main About Section (Reused) */}
            <AboutSection />

            {/* 🔹 Our History / Story */}
            <section className="history-section py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img
                                src="/image/about-restaurant.jpg"
                                alt="Our History"
                                className="img-fluid rounded shadow-lg history-img"
                            />
                        </div>
                        <div className="col-md-6 order-md-1 pe-md-5 mt-4 mt-md-0">
                            <h2 className="section-title mb-4">How It All Started</h2>
                            <p className="text-muted">
                                It all began with a simple idea: to bring the authentic flavors of
                                traditional cooking to the modern world. Our founder, Chef
                                Giovanni, started with a small family kitchen and a handful of
                                secret recipes passed down through generations.
                            </p>
                            <p className="text-muted">
                                Over the years, we have grown into a beloved destination for food
                                lovers, but our core values remain the same: fresh ingredients,
                                heartfelt service, and a passion for culinary excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Values Cards */}
            <section className="values-section py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-5">Our Core Values</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="value-card p-4 h-100 shadow-sm">
                                <div className="icon-box mb-3 text-primary">
                                    <i className="bi bi-heart-fill fs-1"></i>
                                </div>
                                <h4>Passion</h4>
                                <p className="text-muted">
                                    We put our heart and soul into every dish we create.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="value-card p-4 h-100 shadow-sm">
                                <div className="icon-box mb-3 text-success">
                                    <i className="bi bi-gem fs-1"></i>
                                </div>
                                <h4>Quality</h4>
                                <p className="text-muted">
                                    Only the finest, freshest ingredients make it to your plate.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="value-card p-4 h-100 shadow-sm">
                                <div className="icon-box mb-3 text-warning">
                                    <i className="bi bi-people-fill fs-1"></i>
                                </div>
                                <h4>Community</h4>
                                <p className="text-muted">
                                    We are more than a restaurant; we are a gathering place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Chef Section (Reused) */}
            <ChefRecommended />
        </div>
    );
};

export default About;
