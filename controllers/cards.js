const Card = require('../models/card');

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .populate('likes')
    .then((cards) => {
      res
        .send({ data: cards });
    })
    .catch(() => {
      res
        .status(500)
        .send({ message: 'Ha ocurrido un error en el servidor' });
    });
};
