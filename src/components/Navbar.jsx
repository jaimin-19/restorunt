import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { useAuth } from "../context/AuthContext";

function Navbar({ cartCount = 0 }) {
  const navRef = useRef(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navRef.current;
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    // run once in case page already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 Top Info Bar */}
      <div className="top-bar text-center py-1 d-lg-flex justify-content-evenly align-items-baseline mt-3 mt-lg-0">
        <small>
          SUNDAY - THURSDAY: 11:30AM - 11PM | FRIDAY & SATURDAY: 11:30AM - 12AM
        </small>

        <div className="account-icons d-lg-flex mt-3">
          {user ? (
            <div className="d-flex">
              <div className="icon text-center mx-2" title={user.name}>
                <i className="bi bi-person-circle"></i>
                <p>Hi, {user.name}</p>
              </div>
              <div
                className="icon text-center mx-2"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-box-arrow-right"></i>
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="icon text-center mx-2 text-decoration-none text-white">
              <i className="bi bi-person-circle"></i>
              <p>Login</p>
            </NavLink>
          )}

          <NavLink
            to="/order-history"
            className="icon text-center mx-2 text-decoration-none text-white"
          >
            <i className="bi bi-bag"></i>
            <p>My Orders</p>
          </NavLink>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav
        ref={navRef}
        className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-sm"
      >
        <div className="container">
          <NavLink className="navbar-brand d-lg-none mx-auto" to="/">
            <span className="text-logo">🍴 JK Restaurant</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav left-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/events">Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
            </ul>

            <NavLink className="navbar-brand mx-auto d-none d-lg-block" to="/">
              <span className="text-logo">🍴 JK Restaurant</span>
            </NavLink>

            <ul className="navbar-nav right-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservation">Reservation</NavLink>
              </li>

              {/* ✅ Order Link with Red Badge */}
              <li className="nav-item position-relative">
                <NavLink className="nav-link" to="/order">
                  Order
                  {cartCount > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.65rem" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>

              {/* 🔹 Mobile Only: Account & Orders */}
              <li className="nav-item d-lg-none border-top mt-2 pt-2">
                <NavLink className="nav-link" to="/order-history">
                  <i className="bi bi-bag me-2"></i> My Orders
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                {user ? (
                  <div className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout ({user.name})
                  </div>
                ) : (
                  <NavLink className="nav-link" to="/login">
                    <i className="bi bi-person-circle me-2"></i> Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
