import Joi from 'joi'; 
import catchAsync from '../shared/catchAsync.js';
import { userService } from '../service/userService.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import userSchema from '../middleware/userValidate.js';
import UserModel from '../model/userModel.js';


const createUser = catchAsync(async (req, res, next) => {

  const { error } = userSchema.validate(req.body);
  if (error) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST, 
      success: false,
      message: error.details[0].message, 
      data: null
    });
  }

  // Create user
  const user = await userService.createUser(req.body);


  sendResponse(res, {
    statusCode: httpStatus.CREATED, 
    success: true,
    message: 'User created successfully',
    data: user
  });
});

const getUsers = catchAsync(async (req, res, next) => {
  const data = await userService.getUsers()

  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: data
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.body);
  
  const data = userService.updateUser(req.body,id);

  if (data) {
    const updatedUser = await UserModel.findByPk(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND, 
      success: false,
      message: 'User not found',
      data: null
    });
  }
});

const getUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
 const data = userService.getUser(id);

  if (data) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: data
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND, 
      success: false,
      message: 'User not found',
      data: null
    });
  }
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = userService.deleteUser(id);

  if (data) {
    res.status(httpStatus.NO_CONTENT).send(); 
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND, 
      success: false,
      message: 'User not found',
      data: null
    });
  }
});

export const userController = { createUser, getUsers, getUserById, updateUser, deleteUser };
