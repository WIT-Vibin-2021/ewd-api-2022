//* validators/register.validator.js
import Joi from 'joi';

const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).required(),
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required()
});


export default accountSchema;