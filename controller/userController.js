const { validate } = require("joi")
const UserModel = require("../model/userModel")

valid
const createUser = (req,res,next)=>{
   let {error}= validate(req.body,userSchema)
if(error) return res.status(400).json({
   error: error.details[0].message
})
let user = UserModel.create(req.body)
}
const getUser = (req,res,next)=>{
    // findAll
    
}
const updateUser = (req,res,next)=>{
    // update
    
}
const getUserById = (req,res,next)=>{
    // findByPk
}
const deleteUser = (req,res,next)=>{
    
}
module.exports={createUser,getUser,getUserById,updateUser,deleteUser}