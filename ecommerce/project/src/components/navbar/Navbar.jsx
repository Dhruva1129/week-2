import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Correctly import Link
// import React, { useEffect, useState } from "react";

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };



  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/home">ElectroHub</Link> {/* Use Link for navigation */}
      </div>
      <div className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/home">Home</Link></li> {/* Use Link for navigation */}
          <li><Link to="/collections">Collections</Link></li> {/* Use Link for navigation */}
          <li><Link to="/about">About</Link></li> {/* Use Link for navigation */}
          <li><Link to="/contacts">Contacts</Link></li> {/* Use Link for navigation */}
        </ul>
      </div>
      <div className="navbar__icons">
        <FaSearch className="icon" />
        <Link to="/login"><FaUser className="icon" /></Link>
        <Link to="/cart"><FaShoppingCart className="icon" /></Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>

      <div className="navbar__menu-icon" onClick={handleMenuToggle}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
