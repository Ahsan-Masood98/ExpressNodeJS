const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.get("/profile", authMiddleware, getProfile);
// routes.get("/:id", getUserById);
// routes.put("/update/:id", updateUser);
// routes.put("/delete/:id", deleteUser);

module.exports = routes;
