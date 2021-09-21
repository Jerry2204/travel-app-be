var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");

/* GET home page. */
router.get("/dashboard", adminController.viewDashboard);

module.exports = router;
