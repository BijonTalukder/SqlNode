const  Joi = require("joi")
const userSchema = Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string()
    
})
module.exports = userSchema