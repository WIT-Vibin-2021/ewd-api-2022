import FantasyMoviesValidator from './../controllers/validation';
import express from 'express';
import FantasyMoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';
import logger from '../../utils/logger';
const createRouter = (dependencies) => {       
    const router = express.Router(); 
    const fantasyMoviesController = FantasyMoviesController(dependencies);     
    const fantasyMoviesValidator = FantasyMoviesValidator(dependencies);
    const accountsController = AccountsController(dependencies);
    
    
    logger.customLogger.info('Initializing Fantasy Movies Route');

    //router.post('/', accountsController.createAccount); 
    //router.route('/').post(validationController.validateAccount,accountsController.createAccount); 
    router.route('/*')
        .all(accountsController.verifyToken); //ADD THIS: require token for all routes
    router.post('/', fantasyMoviesValidator.validatefantasyMovies, fantasyMoviesController.createFantasyMovies);
    
    router.route('/:id').get(fantasyMoviesController.getFantasyMovies);
    
    router.route('/:id').delete(fantasyMoviesController.deleteFantasyMovies);

    return router; 
};
export default createRouter;