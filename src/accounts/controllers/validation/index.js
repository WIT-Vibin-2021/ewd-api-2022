export default (dependencies) => {

    
    const { accountValidator } = dependencies;

    const validateAccount = async (request, response, next) => {
        // Input
        try {
            console.log(request.body); 
            console.log("--------Account Validation----------"); 
            const validated = await accountValidator.validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateAccount
    };
};