var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');
// const { uploadSingle, uploadMultiple } = require('../middleware/multer');

/* GET home page. */
router.get('/landing-page', apiController.landingPage);

module.exports = router;
