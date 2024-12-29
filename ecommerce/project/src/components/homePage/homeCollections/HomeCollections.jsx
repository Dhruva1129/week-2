import React from "react";
import "./HomeCollections.css";

const ElectronicsPage = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone X Pro",
      price: "$799",
      image: "https://img.freepik.com/free-vector/realistic-design-smartphone-model-11-with-apps_23-2148380823.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$299",
      image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722661.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "4K Smart TV",
      price: "$999",
      image: "https://img.freepik.com/free-psd/modern-tv-isolated_23-2151430326.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: "$1,499",
      image: "https://img.freepik.com/free-photo/gamer-chair-with-multicolored-neon-lights_52683-99742.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Smartwatch",
      price: "$199",
      image: "https://img.freepik.com/free-photo/woman-using-smartwatch-with-digital-assistant_23-2149108000.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "$149",
      image: "https://img.freepik.com/free-photo/wireless-speaker-amplifier-black_140725-7484.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 7,
      name: "4K Smart TV",
      price: "$999",
      image: "https://img.freepik.com/free-psd/modern-tv-isolated_23-2151430326.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 8,
      name: "Gaming Laptop",
      price: "$1,499",
      image: "https://img.freepik.com/free-photo/gamer-chair-with-multicolored-neon-lights_52683-99742.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 9,
      name: "Smartwatch",
      price: "$199",
      image: "https://img.freepik.com/free-photo/woman-using-smartwatch-with-digital-assistant_23-2149108000.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      price: "$149",
      image: "https://img.freepik.com/free-photo/wireless-speaker-amplifier-black_140725-7484.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
    },
  ];
  const sellerProducts = [
      {
        id: 1,
        name: "Smartphone X Pro",
        price: "$799",
        image: "https://img.freepik.com/free-vector/realistic-design-smartphone-model-11-with-apps_23-2148380823.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
      },
      {
        id: 2,
        name: "Wireless Headphones",
        price: "$299",
        image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722661.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
      },
      {
        id: 3,
        name: "4K Smart TV",
        price: "$999",
        image: "https://img.freepik.com/free-psd/modern-tv-isolated_23-2151430326.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
      },
      {
        id: 4,
        name: "Gaming Laptop",
        price: "$1,499",
        image: "https://img.freepik.com/free-photo/gamer-chair-with-multicolored-neon-lights_52683-99742.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
      },
      {
        id: 5,
        name: "Smartwatch",
        price: "$199",
        image: "https://img.freepik.com/free-photo/woman-using-smartwatch-with-digital-assistant_23-2149108000.jpg?uid=R129001493&ga=GA1.1.1083501518.1727976104&semt=ais_hybrid",
      },
  ];
  return (
    <div className="electronics-page">
      <h2 className="page-title">Latest Collections</h2>
      <p className="page-description">
        Discover the latest in premium electronics. Check out our curated selection of products.
      </p>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
      <h2 className="page-title">Best Sellers</h2>
      <p className="page-description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
      </p>
      <div className="products-grid">
        {sellerProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsPage;
