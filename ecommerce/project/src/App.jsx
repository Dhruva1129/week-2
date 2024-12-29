import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from "./components/context/CartContext";
import Navbar from './components/navbar/Navbar';
import Home from './components/homePage/home/Home';
import HomeCollections from './components/homePage/homeCollections/HomeCollections';
import PolicyAndSubscribe from './components/homePage/policyAndSubscribe/PolicyAndSubscribe';
import Footer from './components/homePage/footer/Footer';
import Collections from './components/collections/Collections';
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Login from './components/logsin/login/Login';
import SignUp from './components/logsin/signup/SignUp';
import Cart from "./components/cart/Cart";
import './App.css'; // Import your app-wide styles if any

const AppContent = () => {
  const location = useLocation();

  // Check if the current route is "/collections"
  const isCollectionsPage = location.pathname === '/collections';
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contacts';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isCartPage = location.pathname === '/cart';

  return (
    <>
      {/* Only render these components if we're not on the /collections route */}
      {!isCollectionsPage && !isAboutPage && !isContactPage && !isLoginPage && !isSignupPage && !isCartPage && (
        <>
          <HomeCollections />
          <PolicyAndSubscribe />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
         <Route path="/about" element={<About />} />
         <Route path="/contacts" element={<Contact />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
      <AppContent />
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;
