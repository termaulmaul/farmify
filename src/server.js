// server.js

const express = require('express');
const path = require('path');  // Untuk mengatur path file statis
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes'); // Perbaiki path di sini

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk melayani file statis seperti index.html
app.use(express.static(path.join(__dirname, 'public')));

// Menggunakan routes dari apiRoutes
app.use('/api', apiRoutes);

// Menangani root path agar mengarah ke index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
