
import Joi  from "joi";
const sysAdminSchema = Joi.object({
    sysAdminUsername: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Username must be a string',
            'string.alphanum': 'Username must only contain alphanumeric characters',
            'string.min': 'Username must be at least 3 characters long',
            'string.max': 'Username must be at most 30 characters long',
            'any.required': 'Username is required'
        }),

    sysAdminFullName: Joi.string()
        .min(1) 
        .max(100) 
        .optional() 
        .messages({
            'string.base': 'Full name must be a string',
            'string.min': 'Full name must be at least 1 character long',
            'string.max': 'Full name must be at most 100 characters long'
        }),

    sysAdminEmail: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required'
        }),

    sysAdminPhone: Joi.string()
        .optional() 
        .allow('', null) 
        .messages({
            'string.base': 'Phone number must be a string'
        }),

    sysAdminPassword: Joi.string()
        .min(8) 
        .required()
        .messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least 8 characters long',
            'any.required': 'Password is required'
        }),
    sysAdminRole:Joi.string()
    .messages({
        'string.base':"Role must be a string"
    }),
    sysAdminStatus:Joi.string()
    .messages({
        'string.base':"Status must be a string"
    })
});

export default sysAdminSchema