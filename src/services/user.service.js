const User = require('../models/user.model');

const getAllUsers = async () => {
  return await User.find();
};

const addUser = async ({ username, email, dateOfBirth }) => {
  const user = await User.create({ username, email, dateOfBirth });
  return user;
};

module.exports = {
  getAllUsers,
  addUser,
};
