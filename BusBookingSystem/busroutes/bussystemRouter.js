const express = require('express');
const router = express.Router();
const busController = require('../busController/busSystemController');

router.post('/users', busController.addUserEntries);
router.get('/users', busController.fetchUserEntries);
router.post('/buses',busController.addBusEntries);
router.get('/buses/available/:seats', busController.fetchBusEntries);


module.exports = router;