// src/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const soilSensorController = require('../controllers/soilSensorController');

// Route untuk menerima data soil dari ESP32
router.post('/soil', soilSensorController.receiveData);

module.exports = router;
