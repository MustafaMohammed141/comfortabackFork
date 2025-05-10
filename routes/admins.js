const express = require("express");
const admin_routes = express.Router();
const { checkAuth } = require("../middleware/checkAuth");
const {
  getAdmins,
  postAdmins,
  deleteAdmins,
  putAdmins,
  getSingleAdmins,
} = require("../controllers/admins");

admin_routes.route("/").get(getAdmins).post(checkAuth, postAdmins);

admin_routes
  .route("/:adminId")
  .get(checkAuth, getSingleAdmins)
  .put(checkAuth, putAdmins)
  .delete(checkAuth, deleteAdmins);


module.exports = { admin_routes };
