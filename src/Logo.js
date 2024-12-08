import React from "react";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-item">
        <img src="images/Logo.webp" alt="Business Courses" />
        <div className="logo-caption">Business Courses Institute</div>
      </div>
      <div className="logo-item">
        <img src="images/Logo1.webp" alt="Business Courses" />
        <div className="logo-caption">Courses for All Levels</div>
      </div>
      <div className="logo-item">
        <img src="images/Logo2.webp" alt="Business Courses" />
        <div className="logo-caption">Learn From Experts</div>
      </div>
    </div>
  );
}

export default Logo;
