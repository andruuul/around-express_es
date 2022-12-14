const express = require('express');
const mongoose = require('mongoose');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect('mongodb://localhost:27017/aroundb');

app.use(express.json({ extended: true })); // para parsear application/json
app.use(express.urlencoded({ extended: true })); // para el formato de datos tradicional GET form

app.use((req, res, next) => {
  req.user = {
    _id: '6399f09eb258712c41aa9ea9',
  };

  next();
});

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
  res.status(404);
  res.send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Link to port: ${PORT}`);
});
