const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

exports.getAllUsers = async (req, res) => {
  const users = await User.getAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.getById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  res.json(user);
};

exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = { id: uuidv4(), name, email, age };
  await User.create(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
  const user = await User.getById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Pengguna tidak ditemukan' });

  const { name, email, age } = req.body;
  const updatedUser = { name, email, age };
  await User.update(req.params.id, updatedUser);
  res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
  const user = await User.getById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Pengguna tidak ditemukan' });

  await User.delete(req.params.id);
  res.json({ message: 'Pengguna berhasil di hapus' });
};
