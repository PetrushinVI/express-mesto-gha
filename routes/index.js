const router = require('express').Router();

const usersRouter = require('./users');
const cardsRouter = require('./cards');
const NotFoundError = require('../errors/notFound');
const auth = require('../middlewares/auth');

router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);
router.use('*', auth, () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
