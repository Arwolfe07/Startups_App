// Setting data routes for getting data
const express = require('express');
const dataController = require('../controllers/data');
const router = express.Router();

// setting routes for data
router.get('/data',dataController.getData);
router.post('/data',dataController.addData);

module.exports = router
