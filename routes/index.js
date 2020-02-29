var express = require('express');
var router = express.Router();
var HomeController = require('../app/controllers/home_controller.js');

/* GET home page. */
router.get('/', HomeController.index );

module.exports = router;
