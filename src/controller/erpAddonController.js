
import httpStatus from "http-status";


import catchAsync from "../shared/catchAsync.js";
import ApiError from "../error/handleApiError.js";
import sendResponse from "../shared/sendResponse.js";
import { erpAddonService } from "../service/erpAddonService.js";

// Controller function for creating a new ERP Module
 const createAddon = catchAsync(async (req, res) => {
  const result = await erpAddonService.createErpAddon(req.body);

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create ERP addon");
  }

  sendResponse(res,{
    httpStatus:httpStatus.CREATED, 
    success :true, 
    message: "ERP addon created successfully", 
    data:result});
});

// Controller function for getting all ERP Modules
 const getAllAddons = catchAsync(async (req, res) => {
  const result = await erpAddonService.getErpAddons();

  if (!result || result.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "No ERP addon found");
  }

  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message:"ERP addon fetched successfully",
    data: result});
});

// Controller function for getting a single ERP Module by ID
 const getAddonById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await erpAddonService.getErpAddonById(id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, `ERP addon with ID ${id} not found`);
  }
  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message: `ERP addon with ID ${id} fetched successfully`,
    data: result});
  
});

// Controller function for updating an ERP Module
 const updateAddon = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await erpAddonService.updateErpAddon(req.body, id);

  if (result[0] === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, `ERP addon with ID ${id} not found`);
  }
  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message: `ERP addon with ID ${id} updated successfully`,
    data: result});
 
});

// Controller function for deleting an ERP Module
 const deleteAddon = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await erpAddonService.deleteErpAddon(id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, `ERP addon with ID ${id} not found`);
  }
  sendResponse(res, { 
    httpStatus:httpStatus.OK,
    success : true, 
    message:  `ERP addon with ID ${id} deleted successfully`,
    data: result});

});
export const erpAddonController = { createAddon, getAllAddons, getAddonById, updateAddon, deleteAddon };
