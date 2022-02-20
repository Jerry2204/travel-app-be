var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middleware/multer");

/* GET home page. */
router.get("/dashboard", adminController.viewDashboard);

/* Endpoint For Category */
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", uploadSingle, adminController.deleteBank);

/* Endpoint For Item */
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);

router.get("/booking", adminController.viewBooking);

module.exports = router;
