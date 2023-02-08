const Product = require("../models/product.model");
const User = require("../models/user.model");

const getAllProducts = async (req, res) => {
  console.log("inside get all products api");
  const ownerId = req.user.id;
  const products = await Product.find({ owner: ownerId });
  res.send({
    products,
    message: "all products fetched successfuly",
  });
};
const addProduct = async (req, res) => {
  console.log("inside add product api");
  const { id, email, name } = req.user;
  const product = await Product.create({ ...req.body, owner: id });
  const owner = await User.findById({ _id: id });
  owner.products.push(product._id);
  owner.save();
  res.send({
    product,
    message: "product added successfuly",
  });
};
const getProductById = async (req, res) => {
  console.log("inside get one product api");
  const product = await Product.findById({ _id: req.params.id }).populate(
    "owner"
  );
  res.send({
    product,
    message: "product fetched successfuly",
  });
};
const editProductById = async (req, res) => {
  console.log("inside edit one product api");
  // new:true means Upsert if specific object exist then update otherwise insert
  const product = await Product.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );
  res.send({
    product,
    message: "product edited successfuly",
  });
};
const deleteById = async (req, res) => {
  console.log("inside delete one product api");
  const product = await Product.deleteOne({ _id: req.params.id });
  res.send({
    product,
    message: "product deleted successfuly",
  });
};
module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  deleteById,
  editProductById,
};
