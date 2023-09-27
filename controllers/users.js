let data = require('../data/index')

const listUsers = (req, res) => {
    res.json(data);
  }

const showUser = (req, res) => {
    const userId = req.params.id;
    const user = data.find((data) => data.id === userId);
  
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  }

const createUser = (req, res) => {
    const newUser = req.body;
    data.push(newUser);
    res.status(201).json(newUser);
  }

const updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const index = data.findIndex((data) => data.id === userId);
  
    if (index < 0 || index > 9) {
      res.status(400).json({ error: 'User not found' });
    } else {
      data[index] = { ...data[index], ...updatedUser };
      res.json(data[index]);
    }
  }

const deleteUser = (req, res) => {
    const userId = req.params.id;
    const index = data.findIndex((data) => data.id === userId);
  
    if (index < 0 || index > 9) {
      res.status(400).json({ error: 'User not found' });
    } else {
      data.splice(index, 1);
      res.status(204).send();
    }}

  module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }