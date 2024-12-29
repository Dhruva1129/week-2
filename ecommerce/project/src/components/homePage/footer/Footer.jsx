import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">ElectroHub</h2>
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3 className="footer-heading">COMPANY</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          <p className="footer-contact">+91 98765 43103</p>
          <p className="footer-contact">electrohub@gmail.com</p>
          <p className="footer-contact"><a href="#instagram">Instagram</a></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2024 greatstack.dev - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
