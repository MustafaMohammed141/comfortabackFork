const express = require("express");
const product_routes = express.Router();
const {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
} = require("../controllers/products");
const { checkAuth } = require("../middleware/checkAuth");

product_routes.route("/").get(getProducts);

product_routes
  .route("/:productId")
  .get(getSingleProducts)
  .post(checkAuth, postProducts)
  .put(checkAuth, putProducts)
  .delete(checkAuth, deleteProducts);

module.exports = { product_routes };
