import FantasyMoviesValidator from './../controllers/validation';
import express from 'express';
import FantasyMoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createRouter = (dependencies) => {       
    const router = express.Router(); 
    const fantasyMoviesController = FantasyMoviesController(dependencies);     
    const fantasyMoviesValidator = FantasyMoviesValidator(dependencies);
    const accountsController = AccountsController(dependencies);
    
    console.log("--------fantasyMovies Routes ----------"); 

    //router.post('/', accountsController.createAccount); 
    //router.route('/').post(validationController.validateAccount,accountsController.createAccount); 
    router.route('/*')
        .all(accountsController.verifyToken); //ADD THIS: require token for all routes
    router.post('/', fantasyMoviesValidator.validatefantasyMovies , fantasyMoviesController.createFantasyMovies);
 
    return router; 
};
export default createRouter;