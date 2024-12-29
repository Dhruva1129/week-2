const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust path as per your structure

router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
