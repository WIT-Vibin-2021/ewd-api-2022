//* validators/register.validator.js
import Joi from 'joi';

const fantasyMoviesSchema = Joi.object({
    title: Joi.string().required(),    
    genre: Joi.string().required(),    
    language: Joi.string().required(),    
    release: Joi.string().required(),    
    time: Joi.string().required(),    
    overview: Joi.string().required()
});
// console.log("--------fantasyMovies Validator Index ----------"); 

export default fantasyMoviesSchema;