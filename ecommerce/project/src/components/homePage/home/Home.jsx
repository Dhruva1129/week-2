import React from 'react';
import './Home.css'; // Import the CSS for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__left">
        <h1>The Future of Tech Shopping</h1>
        <p>
          Discover the latest in technology with our curated selection of premium
          electronics. From smartphones to laptops, we've got everything you need.
        </p>
        <button className="shopNowBtn">Shop Now</button>
      </section>
      <section className="homepage__right">
        <img 
          src="src/assets/electronic.jpg" 
          alt="Electronics" 
          className="electronicsImage"
        />
      </section>
    </div>
  );
};

export default HomePage;
