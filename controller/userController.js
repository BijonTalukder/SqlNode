const Joi = require('joi');
const UserModel = require('../model/userModel');
const userSchema = require('../middleware/userValidate');
// const userSchema = require('../schemas/userSchema'); // Adjust the path as necessary

const createUser = async (req, res, next) => {
  
  const { error } = userSchema.validate(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    // Create a new user
    let user = await UserModel.create(req.body);
    console.log(user);

    // Respond with the created user data
    res.status(200).json({ data: user });
  } catch (err) {
    // Handle any errors that occur during the creation process
    console.error(err);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

const getUser = async (req, res, next) => {
  try {
    let users = await UserModel.findAll();
    console.log(users,'users');
    
    res.status(200).json({ data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await UserModel.update(req.body, {
      where: { id }
    });

    if (updated) {
      const updatedUser = await UserModel.findByPk(id);
      res.status(200).json({ data: updatedUser });
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await UserModel.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(204).send(); // No content to return
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

module.exports = { createUser, getUser, getUserById, updateUser, deleteUser };
