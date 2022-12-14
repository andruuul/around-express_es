const User = require('../models/user');

function orFailUsers() {
  const error = new Error('Usuario no encontrado');
  error.statusCode = 404;
  throw error;
}

function errorMessagesUsers(err, res) {
  if (err.name === 'ValidationError') {
    res.status(400).send({ message: 'Datos inválidos' });
  } else if (err.name === 'CastError') {
    res.status(400).send({ message: 'ID de usuario no válido' });
  } else if (err.statusCode === 404) {
    res.status(404).send({ message: 'ID de usuario no encontrado' });
  } else {
    res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
}

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => errorMessagesUsers(err, res));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .orFail(orFailUsers)
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .orFail(orFailUsers)
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .orFail(orFailUsers)
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};
