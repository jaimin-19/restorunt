// Button.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css"; // Using CSS Module

const Button = ({ value, href, style, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick(); // Run custom function if provided
      return;
    }

    if (href) {
      navigate(href); // Navigate internally (React Router)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 ${styles.btn}`}
      style={style}
    >
      {value}
    </button>
  );
};

export default Button;
