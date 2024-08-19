import httpStatus from "http-status";
import ApiError from "../error/handleApiError.js";
import sysAdminModel from "../model/sysAdminModel.js";
import bcrypt from 'bcrypt'
import { jwtHelpers } from "../helper/jwt/jwtHelpers.js";
const erpUserLogin=async(payload)=>{
    const {email,password} = payload;
    const  erpUserExist = await sysAdminModel.findOne({
        where:{
            erpUserEmail:email
        }});
        if(!erpUserExist){
            throw new ApiError(httpStatus.NOT_FOUND,"user not exist");
        }

    const passwordExist =  await bcrypt.compare(password, erpUserExist.erpUserEmail);;

    if(erpUserExist && !passwordExist)
        throw new ApiError(httpStatus.UNAUTHORIZED,"password incorrect")

   const token = await jwtHelpers.createToken({
    sysAdminId:erpUserExist.erpUserId,
    role:erpUserExist.erpUserRole
   },"key123","1d")

   
return {
    token
}
}
export default erpUserLogin