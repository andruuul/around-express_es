const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      const cards = JSON.parse(data);
      res.send(cards);})
    .catch (err => {
      console.log(err);
      res
        .status(500)
        .send({ message: 'Ha ocurrido un error en el servidor' })
    })
});

router.get('/:id', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.filter((item) => item._id === req.params.id);
  
      if (user.length === 0) {
        res
          .status(404)
          .send({ message: 'ID de usuario no encontrado' });
      } else {
        res.send(user[0]);
      }
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .send({ message: 'Ha ocurrido un error en el servidor' })
    })
});


module.exports = router;
