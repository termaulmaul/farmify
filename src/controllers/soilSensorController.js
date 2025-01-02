// src/controllers/soilSensorController.js

const receiveData = (req, res) => {
    const { soilValue, status } = req.body;
  
    // Pastikan data diterima dengan benar
    console.log('Data received:', req.body);  // Log data yang diterima
  
    // Periksa apakah data yang diperlukan ada
    if (!soilValue || !status) {
      return res.status(400).send({ error: 'Data incomplete' });
    }
  
    // Tanggapi dengan status sukses
    res.status(200).send({ message: 'Data received successfully', data: { soilValue, status } });
  };
  
  module.exports = { receiveData };
  