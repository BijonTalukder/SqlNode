import Joi from 'joi';

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string()
});

export default userSchema;
