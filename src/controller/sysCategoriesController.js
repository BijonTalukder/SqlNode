import Joi from 'joi'; 
import catchAsync from '../shared/catchAsync.js';
import { sysCategoriesService } from '../service/sysCategoriesService.js';
import sendResponse from '../shared/sendResponse.js';
import httpStatus from 'http-status';
// import sysCategoriesSchema from '../middleware/sysCategoriesValidate.js';
import sysCategoriesModel from '../model/sysCategoriesModel.js';
import ApiError from '../error/handleApiError.js';

const createCategory = catchAsync(async (req, res, next) => {
  // Validate request body
  // const { error } = sysCategoriesSchema.validate(req.body);
  // if (error) {
  //   return ApiError(httpStatus.BAD_REQUEST,error.details[0].message)
    
    
  //   // sendResponse(res, {
  //   //   statusCode: httpStatus.BAD_REQUEST, 
  //   //   success: false,
  //   //   message: error.details[0].message, 
  //   //   data: null
  //   // });
  // }

  // Create category
  const category = await sysCategoriesService.createCategory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED, 
    success: true,
    message: 'Category created successfully',
    data: category
  });
});

const getCategories = catchAsync(async (req, res, next) => {
  const data = await sysCategoriesService.getCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: data
  });
});

const updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // Update category
  const updated = await sysCategoriesService.updateCategory(req.body, id);

  if (updated) {
    const updatedCategory = await sysCategoriesModel.findByPk(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category updated successfully',
      data: updatedCategory
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND, 
      success: false,
      message: 'Category not found',
      data: null
    });
  }
});

const getCategoryById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // Retrieve category
  const data = await sysCategoriesService.getCategory(id);

  if (data) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category retrieved successfully',
      data: data
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND, 
      success: false,
      message: 'Category not found',
      data: null
    });
  }
});

const deleteCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // Delete category
  const deleted = await sysCategoriesService.deleteCategory(id);

  if (deleted) {
    res.status(httpStatus.NO_CONTENT).send(); 
    sendResponse(res, {
      statusCode: httpStatus.OK, 
      success: true,
      message: 'Category deleted successfully.',
      data: null
    });


  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND, 
      success: false,
      message: 'Category not found',
      data: null
    });
  }
});

export const sysCategoriesController = { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };
