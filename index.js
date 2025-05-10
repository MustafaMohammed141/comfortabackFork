const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { admin_routes } = require("./routes/admins");
const { product_routes } = require("./routes/products");
const { user_routes } = require("./routes/users");
const app = express();

require("dotenv").config();

const DB = process.env.MONGO_URI;
mongoose
  .connect(DB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
// =========

app.use(cors());
app.use(express.json());

app.use("/users", user_routes);
app.use("/products", product_routes);
app.use("/admins", admin_routes);

app.use((req, res) => {
  return res.status(400).json({
    status: 400,
    data: { data: null, message: "invalid route" },
  });
});

module.exports = app;
