const product = require("../models/product");
const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getSingleProducts = async () => {
  console.log(`getProducts`);
};
const postProducts = async () => {
  console.log(`postProducts`);
};
const deleteProducts = async () => {
  console.log(`deleteProducts`);
};
const putProducts = async () => {
  console.log(`putProducts`);
};

module.exports = {
  getProducts,
  postProducts,
  deleteProducts,
  putProducts,
  getSingleProducts,
};
