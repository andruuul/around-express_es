const User = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => { res.send({ data: users }); })
    .catch(() => { res.status(500).send({ message: 'Ha ocurrido un error en el servidor' }); });
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(404).send({ message: 'ID de usuario no encontrado' });
      }
    })
    .catch((err) => {
      console.log(`Ha ocurrido un error desconocido ${err.name}: ${err.message}`);
    });
};
