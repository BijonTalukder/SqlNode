import httpStatus from "http-status";
import sysAdminSchema from "../middleware/sysAdminValidate.js";
import { sysAdminService } from "../service/sysAdminService.js";
import catchAsync from "../shared/catchAsync.js"
import sendResponse from "../shared/sendResponse.js";
import ApiError from "../error/handleApiError.js";

const createSysAdmin = catchAsync(async (req, res) => {
   
    const { error } = sysAdminSchema.validate(req.body);
    
    if (error) {
        return ApiError(httpStatus.BAD_REQUEST,error.details[0].message)
        
    }


    const data = await sysAdminService.createSysAdmin(req.body);

    return sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Admin created successfully',
        data: data
    });
});
const getSysAdmin =catchAsync(async (req, res)=>{
  const data = sysAdminService.getSysAdmin();
  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'retrive data successfully',
    data: data
});
});
const updateSysAdmin =catchAsync(async (req, res)=>{
    const { id } = req.params;
  
  
    const data = sysAdminService.updateSysAdmin(req.body,id);
  
    if (data) {
      const updatedUser = await updateSysAdmin.findByPk(id);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ' updated successfully',
        data: updatedUser
      });
    } else {
      sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND, 
        success: false,
        message: 'sys admin not found',
        data: null
      });
    }
    
});
const deleteSysAdmin =catchAsync(async (req, res, next)=>{
    const { id } = req.params;
  const data = sysAdminService.deleteSysAdmin(id);

  if (data) {
    sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND, 
        success: false,
        message: 'delete successfully',
        data: null
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

export const sysAdminController={
    createSysAdmin,
    getSysAdmin,
    updateSysAdmin,
    deleteSysAdmin
    
}
