const userRoutes = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
  getUserMe,
} = require('../controllers/users');

const {
  userIdValidation,
  updateUserValidation,
  updateAvatarValidation,
} = require('../middlewares/validation');

userRoutes.get('/', getUsers);
userRoutes.get('/me', getUserMe);
userRoutes.get('/:userId', userIdValidation, getUserById);
userRoutes.post('/', createUser);
userRoutes.patch('/me', updateUserValidation, updateUser);
userRoutes.patch('/me/avatar', updateAvatarValidation, updateAvatar);

module.exports = userRoutes;
