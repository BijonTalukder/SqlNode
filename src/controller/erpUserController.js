
import catchAsync from '../shared/catchAsync.js';
import { userService } from '../service/erpUserService.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
import userSchema from '../middleware/erpUserValidate.js';
import UserModel from '../model/erpUserModel.js';
import ApiError from '../error/handleApiError.js';


const createErpUser = catchAsync(async (req, res, next) => {

  const { error } = userSchema.validate(req.body);
  if (error) {

    throw new ApiError(httpStatus.BAD_REQUEST,error.details[0].message)
    
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

const getErpUsers = catchAsync(async (req, res, next) => {
  const data = await userService.getUsers()

  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: data
  });
});

const updateErpUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
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

const getErpUserById = catchAsync(async (req, res, next) => {
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
    throw new ApiError(httpStatus.NOT_FOUND,"User not found")
   
  }
});

const deleteErpUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = userService.deleteUser(id);

  if (data) {
    sendResponse(res, {
      statusCode: httpStatus.OK, 
      success: true,
      message: 'User update successfully',
      data: null
    });
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

const LoginErpUser = catchAsync(async(req,res)=>{
  const data = await sysAdminLogin(req.body);
  console.log(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'admin logged in successfully !',
    data: data,
  });
})

export const erpUserController = { createErpUser, getErpUserById, getErpUsers, updateErpUser, deleteErpUser,LoginErpUser };
