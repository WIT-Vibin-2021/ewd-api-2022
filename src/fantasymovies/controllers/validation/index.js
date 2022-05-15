export default (dependencies) => {

    
    const { fantasyMoviesValidator } = dependencies;

    const validatefantasyMovies = async (request, response, next) => {
        // Input
        try {
            //console.log(request.body); 
            console.log("--------fantasyMovies Validation----------"); 
            const validated = await fantasyMoviesValidator.validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validatefantasyMovies
    };
};