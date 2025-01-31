const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config(); 
const MONGO_URI = process.env.MONGO_URI;



mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database:', err));


app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
