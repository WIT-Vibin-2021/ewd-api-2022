import logger from '../../../utils/logger';
export default (dependencies) => {

    
    const { accountValidator } = dependencies;

    const validateAccount = async (request, response, next) => {
        // Input
        try {
            //console.log(request.body); 
            //console.log("--------Account Validation----------"); 
            logger.customLogger.info('Account Validation');
            const validated = await accountValidator.validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {
            logger.customLogger.error(`Invalid Data ${err.message}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateAccount
    };
};