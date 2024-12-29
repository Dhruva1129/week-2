import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Leading the way in electronics and innovation</p>
      </div>
      <div className="about-content">
        <div className="about-description">
          <h2>Our Story</h2>
          <p>
            Welcome to our online store, your one-stop destination for all the
            latest and greatest electronics. Our mission is to provide top-quality
            products at affordable prices, while ensuring an exceptional shopping
            experience. Whether you're looking for smartphones, laptops, home
            appliances, or gaming accessories, we have it all.
          </p>
          <p>
            We pride ourselves on curating a collection of cutting-edge gadgets
            that meet the needs of our diverse customers. Our team works tirelessly
            to keep up with the latest trends, ensuring that we bring you the best
            products on the market.
          </p>
        </div>
        <div className="about-team">
          <h2>Our Team</h2>
          <p>
            Our team is made up of passionate tech enthusiasts who strive to offer
            the best customer service possible. We are always available to assist
            you in making informed decisions and providing support after your
            purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
