
import userModel from "../model/userModel.js";

//create user
const createUser=async(postBody)=>{
    const result = await userModel.create(postBody)
    return result;

}
//get all user
const getUsers = async()=>{
    console.log('user fetch');
    
    const result = await userModel.findAll();
    return result
}
//update user
const updateUser = async(postBody,id)=>{
      const result = await userModel.update(postBody, {
    where: { id }
  });
  return result;
   
}
//get single user
const getUser = async(id)=>{
    console.log('user fetch one',id);
    const result = await userModel.findByPk({id});
    return result;

}

const deleteUser = async(id)=>{
    const result = await userModel.destroy({
        where: { id }
      });
    return result;
}

export const userService={
    createUser,
    getUsers,
    updateUser,
    getUser,
    deleteUser
}