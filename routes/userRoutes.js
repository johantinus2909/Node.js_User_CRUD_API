const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { validateUser } = require('../middleware/validation');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', validateUser, userController.createUser);
router.put('/users/:id', validateUser, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
