import React from "react";
import "./HeroSection.css";
import Button from "./Button";


function HeroSection() {
  return (
    <>
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="hero-title">
          Welcome To Our <span>Partow Foods</span> Restaurant
        </h1>
        <p className="hero-subtitle">
          Lorem Ipsum Dolor Sit Amet Consectetur, Ac Purus Scelerisque Lectus
          Vestibulum Mattis.
        </p>

        <div className="hero-buttons">
          <Button value="Reserve Now" href="/reservation" />
          <Button value="Order Now" href="/menu" />
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSection;
