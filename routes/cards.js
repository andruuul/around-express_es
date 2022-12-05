const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/cards.json');
  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      const cards = JSON.parse(data);
      res
        .status(200)
        .send(cards);
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .send({ message: 'Ha ocurrido un error en el servidor' })
    })
});

module.exports = router;
