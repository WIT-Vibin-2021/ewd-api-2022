//* validators/register.validator.js
import Joi from 'joi';
import logger from '../../utils/logger';

const accountSchema = Joi.object({
    email: Joi.string().email().required(),    
    password:Joi.string().min(7).required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/),
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required()
});
logger.customLogger.info('JOI Validator: Fantasy movie validator');

export default accountSchema;