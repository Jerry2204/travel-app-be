var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");

/* GET home page. */
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

module.exports = router;
