import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./Collections.css";

const Collections = () => {
  const { addToCart } = useCart();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get("http://localhost:5001/products");
        setCategories(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredProducts = selectedCategory
    ? categories.find((category) => category.name === selectedCategory)?.products || []
    : categories.flatMap((category) => category.products);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Our Collections</h1>
      </header>

      <div className="filters">
        <button
          className="dropdown-toggle"
          onClick={() => setFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>

        {isFilterOpen && (
          <div className="dropdown-filters">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`filter-button ${
                  selectedCategory === category.name ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
            <button
              className="filter-button clear"
              onClick={() => setSelectedCategory("")}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>{product.price}</strong>
              </p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Collections;
