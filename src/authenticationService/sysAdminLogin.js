import httpStatus from "http-status";
import ApiError from "../error/handleApiError.js";
import sysAdminModel from "../model/sysAdminModel.js";
import bcrypt from 'bcrypt'
import { jwtHelpers } from "../helper/jwt/jwtHelpers.js";
const sysAdminLogin=async(payload)=>{
    const {email,password} = payload;
    const  sysAdminExist = await sysAdminModel.findOne({
        where:{
            sysAdminEmail:email
        }});
        if(!sysAdminExist){
            throw new ApiError(httpStatus.NOT_FOUND,"admin not exist");
        }
    const passwordExist =  await bcrypt.compare(password, sysAdminExist.sysAdminPassword);;

    if(sysAdminExist && !passwordExist)
        throw new ApiError(httpStatus.UNAUTHORIZED,"password incorrect")

   const token = await jwtHelpers.createToken({
    sysAdminId:sysAdminExist.sysAdminId
   },"key123","1d")
return {
    token
}
}
export default sysAdminLogin