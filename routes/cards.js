const router = require('express').Router();
const {
  getAllCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', (req, res) => {
  getAllCards(req, res);
});

router.post('/', (req, res) => {
  createCard(req, res);
});

router.delete('/:cardId', (req, res) => {
  deleteCard(req, res);
});

router.put('/:cardId/likes', (req, res) => {
  likeCard(req, res);
});

router.delete('/:cardId/likes', (req, res) => {
  dislikeCard(req, res);
});

module.exports = router;
