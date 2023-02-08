const mongoose = require("mongoose");
// Schema or Table to be shown in MongoDB documnet
const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // col 1: name
  name: {
    type: String,
    default: "",
    required: true,
  },
  // col 2: Price
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  // col 3: Pieces
  pieces: {
    type: Number,
    default: 1,
    required: true,
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
