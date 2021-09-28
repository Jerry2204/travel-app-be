var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");

/* GET home page. */
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);

module.exports = router;
