const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');


router.get('/webhook', homeController.getWebhook);
router.post('/webhook', homeController.postWebhook);

router.get('/', homeController.index);

module.exports = router;

