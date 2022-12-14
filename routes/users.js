const router = require('express').Router();
const {
  getAllUsers, createUser, getUserById, updateAvatar, updateUser,
} = require('../controllers/users');

router.get('/', (req, res) => {
  getAllUsers(req, res);
});

router.post('/', (req, res) => {
  createUser(req, res);
});

router.get('/:id', (req, res) => {
  getUserById(req, res);
});

router.patch('/me', (req, res) => {
  updateUser(req, res);
});

router.patch('/me/avatar', (req, res) => {
  updateAvatar(req, res);
});

module.exports = router;
