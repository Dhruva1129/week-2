const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  products: [productSchema],
});

module.exports = mongoose.models.Category || mongoose.model("Category", categorySchema);
