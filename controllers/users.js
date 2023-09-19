let data = require('./data/index')

const listUsers = (req, res) => {
    res.json(data.users);
  }

const showUser = (req, res) => {
    const userId = req.params.id;
    const user = data.users.find((user) => user.id === userId);
  
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  }

const createUser = (req, res) => {
    const newUser = req.body;
    data.users.push(newUser);
    res.status(201).json(newUser);
  }

const updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const index = data.users.findIndex((user) => user.id === userId);
  
    if (index === -1) {
      res.status(400).json({ error: 'User not found' });
    } else {
      data.users[index] = { ...data.users[index], ...updatedUser };
      res.json(data.users[index]);
    }
  }

const deleteUser = (req, res) => {
    const userId = req.params.id;
    const index = data.users.findIndex((user) => user.id === userId);
  
    if (index === -1) {
      res.status(400).json({ error: 'User not found' });
    } else {
      data.users.splice(index, 1);
      res.status(204).send();
    }}

  module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }