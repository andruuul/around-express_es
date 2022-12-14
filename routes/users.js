const router = require('express').Router();
const users = require('../controllers/users');

router.get('/', (req, res) => {
  users.getAllUsers(req, res);
});

router.get('/:id', (req, res) => {
  users.getUserById(req, res);
});

/*
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
*/

module.exports = router;
