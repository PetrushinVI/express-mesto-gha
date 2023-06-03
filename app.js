const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const { createUser, login } = require('./controllers/users');
const { signInValidation, signUpValidation } = require('./middlewares/validation');
const { errors } = require('celebrate');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const { PORT = 3000 } = process.env;

app.post('/signup', signUpValidation, createUser);
app.post('/signin', signInValidation, login);

app.use(router);
app.use(limiter);
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use(errors());

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});
