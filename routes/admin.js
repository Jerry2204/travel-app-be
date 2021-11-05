var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");
const { upload } = require("../middleware/multer");

/* GET home page. */
router.get("/dashboard", adminController.viewDashboard);

/* Endpoint For Category */
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

router.get("/bank", adminController.viewBank);
router.post("/bank", upload, adminController.addBank);
router.put("/bank", upload, adminController.editBank);
router.delete("/bank/:id", upload, adminController.deleteBank);

router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

module.exports = router;
