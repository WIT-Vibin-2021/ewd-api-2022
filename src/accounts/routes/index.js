import AccountValidator from './../controllers/validation';
import express from 'express';
import AccountsController from '../controllers';

const createRouter = (dependencies) => {       
    const router = express.Router(); 
    const accountsController = AccountsController(dependencies);     
    const accountValidator = AccountValidator(dependencies);
    
    console.log("--------Account Routes 1----------"); 

    //router.post('/', accountsController.createAccount); 
    //router.route('/').post(validationController.validateAccount,accountsController.createAccount); 
    router.post('/', accountValidator.validateAccount , accountsController.createAccount);

    router.route('/').get(accountsController.listAccounts);

    router.route('/:id').get(accountsController.getAccount);

    router.route('/:id').post(accountsController.getAccount); 

    router.route('/email/:id').get(accountsController.getByEmail);  

    router.route('/security/token').post(accountsController.authenticateAccount);  

    router.route('/:id/favourites').post(accountsController.addFavourite); 

    router.route('/:id/favourites').get(accountsController.getFavourites);
 
    return router; 
};
export default createRouter;