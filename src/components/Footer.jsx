import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png"; // your logo image path
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Button
  from "./Button";



const Footer = () => {
  return (
    <footer className="footer-section text-center py-5">
      <div className="container">


        {/* Navigation Links */}
        <ul className="footer-nav list-inline mb-4">
          <li className="list-inline-item mx-3"><a href="/menu">Menu</a></li>
          <li className="list-inline-item mx-3"><a href="/events">Events</a></li>
          <li className="list-inline-item mx-3"><a href="/about">About Us</a></li>
          <li className="list-inline-item mx-3"><a href="/reservation">Reservation</a></li>
          <li className="list-inline-item mx-3"><a href="/order">Order</a></li>
          <li className="list-inline-item mx-3"><a href="/contact">Contact Us</a></li>
        </ul>

        {/* Description */}
        <p className="footer-desc mx-auto mb-3 col-lg-8">
          Lorem Ipsum Dolor Sit Amet Consectetur. Sagittis Mattis Mauris At Condimentum Arcu Eget.
          Sed Posuere Cursus Pharetra Tortor Eu Purus Rhoncus Lectus. Enim Ut Ligula Sit Nec Donec.
        </p>

        {/* Opening Hours */}
        <p className="footer-hours mb-4">
          SUNDAY - THURSDAY: 11:30AM - 11PM | FRIDAY & SATURDAY: 11:30AM - 12AM
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">

          <Button value="Reserve Now" href="/reservation" />
          <Button value="Order Now" href="/menu" />

        </div>

        {/* Social Icons */}
        <div className="social-icons mb-3">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        {/* Bottom Text */}
        <p className="footer-copy mb-0">Lorem Ipsum Dolor Sit Amet Consectetur.</p>
      </div>
    </footer>
  );
};

export default Footer;
