import React from "react";
import { FaExchangeAlt, FaUndo, FaHeadphonesAlt } from "react-icons/fa";
import "./PolicyAndSubscribe.css";

const PolicyAndSubscribe = () => {
  return (
    <div className="policy-subscribe-section">
      {/* Policies Section */}
      <div className="policies">
        <div className="policy-item">
          <FaExchangeAlt className="policy-icon" />
          <h3 className="policy-title">Easy Exchange Policy</h3>
          <p className="policy-description">
            We offer hassle-free exchange policy
          </p>
        </div>
        <div className="policy-item">
          <FaUndo className="policy-icon" />
          <h3 className="policy-title">7 Days Return Policy</h3>
          <p className="policy-description">
            We provide 7 days free return policy
          </p>
        </div>
        <div className="policy-item">
          <FaHeadphonesAlt className="policy-icon" />
          <h3 className="policy-title">Best Customer Support</h3>
          <p className="policy-description">
            We provide 24/7 customer support
          </p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="subscribe">
        <h2 className="subscribe-title">Subscribe now & get 20% off</h2>
        <p className="subscribe-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default PolicyAndSubscribe;
