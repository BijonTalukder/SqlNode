
import httpStatus from "http-status";

import { erpModuleService } from "../service/erpModuleService.js";
import catchAsync from "../shared/catchAsync.js";
import ApiError from "../error/handleApiError.js";
import sendResponse from "../shared/sendResponse.js";

// Controller function for creating a new ERP Module
 const createModule = catchAsync(async (req, res) => {
  const result = await erpModuleService.createErpModule(req.body);

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create ERP module");
  }

  sendResponse(res,{
    httpStatus:httpStatus.CREATED, 
    success :true, 
    message: "ERP module created successfully", 
    data:result});
});

// Controller function for getting all ERP Modules
 const getAllModules = catchAsync(async (req, res) => {
  const result = await erpModuleService.getErpModules();

  if (!result || result.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "No ERP modules found");
  }

  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message:"ERP modules fetched successfully",
    data: result});
});

// Controller function for getting a single ERP Module by ID
 const getModuleById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await erpModuleService.getErpModuleById(id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, `ERP module with ID ${id} not found`);
  }
  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message: `ERP module with ID ${id} fetched successfully`,
    data: result});
  
});

// Controller function for updating an ERP Module
 const updateModule = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await erpModuleService.updateErpModule(req.body, id);

  if (result[0] === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, `ERP module with ID ${id} not found`);
  }
  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message: `ERP module with ID ${id} updated successfully`,
    data: result});
 
});

// Controller function for deleting an ERP Module
 const deleteModule = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await erpModuleService.deleteErpModule(id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, `ERP module with ID ${id} not found`);
  }
  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message:  `ERP module with ID ${id} deleted successfully`,
    data: result});

});
export const erpModuleController = { createModule, getAllModules, getModuleById, updateModule, deleteModule };
