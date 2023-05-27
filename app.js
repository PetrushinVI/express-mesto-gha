const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '64712051888ecdc70981af09',
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});