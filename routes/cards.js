const router = require('express').Router();
const cards = require('../controllers/cards');

router.get('/', (req, res) => {
  cards.getAllCards(req, res);
});

module.exports = router;
