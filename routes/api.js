var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');
const { uploadSingle } = require('../middleware/multer');

/* GET home page. */
router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailItem);
router.post('/booking', uploadSingle, apiController.booking);

module.exports = router;
