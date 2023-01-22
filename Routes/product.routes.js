const express = require("express");
const routes = express.Router();
const {
  getAllProducts,
  addProduct,
  getProductById,
  deleteById,
  editProductById,
} = require("../controllers/product.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

// Creating route of Get Product
routes.get("", getAllProducts); // logic is in controller as getAllProducts
// Creating route of Get 1 Product by Id
routes.get("/:id", getProductById);
// Creating route of Psot Product
routes.post("/add", authMiddleware, addProduct);
// Creating route of Delete Product
routes.delete("/delete/:id", deleteById);
// Creating route of Update Product
routes.put("/update/:id", editProductById);

module.exports = routes;
