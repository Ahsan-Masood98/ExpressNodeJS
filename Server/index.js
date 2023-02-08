//Step 0 1.npm init    in cmd  2. put "start": "node index.js", in scripts in package.jason
//Step 1 require Express
const express = require("express");
const productRoutes = require("./Routes/product.routes");
const userRoutes = require("./Routes/user.routes");
const cors = require("cors");

//Step 2
const app = express();
require("dotenv").config();

require("./models/db")();
//Step 3
const PORT = 4000;

//Midlleware => it uses to manipulate things before request
//app.use is a global scope variable
app.use(express.json()); // this is to convert the payload in JSON
app.use(
  cors({
    cors: "*",
  })
);
app.use((req, res, next) => {
  console.log("method: %s url: %s", req.method, req.url);
  next();
});

// Creating route of Get
app.get("/", (req, res) => {
  res.send("Hello People");
}); // its event driven

// defining routes from another file and importing the file using Epress.Router()
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

// Step 4
app.listen(PORT, () => {
  console.log(`Server is up running on http://localhost:${PORT}`);
}); // Runtime enviroment=> always listening for the changes
