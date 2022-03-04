const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');

router.get('/login', homeController.login);
router.get('/', homeController.index);

module.exports = router;

