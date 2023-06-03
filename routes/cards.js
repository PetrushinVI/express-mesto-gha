const cardRoutes = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  addLike,
  deleteLike,
} = require('../controllers/cards');

const {
  createCardValidation,
  cardIdValidation,
} = require('../middlewares/validation');

cardRoutes.get('/', getCards);
cardRoutes.post('/', createCardValidation, createCard);
cardRoutes.delete('/:cardId', cardIdValidation, deleteCard);
cardRoutes.put('/:cardId/likes', cardIdValidation, addLike);
cardRoutes.delete('/:cardId/likes', cardIdValidation, deleteLike);

module.exports = cardRoutes;
