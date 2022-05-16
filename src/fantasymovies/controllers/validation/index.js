import logger from '../../../utils/logger';
export default (dependencies) => {

    
    const { fantasyMoviesValidator } = dependencies;

    const validatefantasyMovies = async (request, response, next) => {
        // Input
        try {
            //console.log(request.body); 
            logger.customLogger.info('Validation: Fantasy Movies');
            const validated = await fantasyMoviesValidator.validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {
            logger.customLogger.error(`Validation : Invalid Data ${err.message}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validatefantasyMovies
    };
};