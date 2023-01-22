const mongoose = require("mongoose");
// Schema or Table to be shown in MongoDB documnet
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  contact: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
