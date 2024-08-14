import sysAdminModel from "../model/sysAdminModel.js";
import bcrypt from 'bcrypt'

//create user
const createSysAdmin=async(postBody)=>{
   
       const {sysAdminPassword}=postBody;
       const hashedPassword = await bcrypt.hash(sysAdminPassword,10);
      
        const adminWithHashedPassword = {
          ...postBody,
          sysAdminPassword: hashedPassword
      };
  
      // Create a new sysAdmin record with the hashed password
      const result = await sysAdminModel.create(adminWithHashedPassword);
  
      return result;
    
    
    
   
}
//get all user
const getSysAdmin = async()=>{
  
    
    const result = await sysAdminModel.findAll();
    return result
}
//update user
const updateSysAdmin = async(postBody,id)=>{
      const result = await sysAdminModel.update(postBody, {
    where: { id }
  });
  return result;
   
}
//get single user
const getSingleSysAdmin = async(id)=>{
   
    const result = await sysAdminModel.findByPk({id});
    return result;

}

const deleteSysAdmin= async(id)=>{
    const result = await sysAdminModel.destroy({
        where: { id }
      });
    return result;
}

export const sysAdminService={
    createSysAdmin,
    getSysAdmin,
    updateSysAdmin,
    deleteSysAdmin,
    getSingleSysAdmin 
  
}