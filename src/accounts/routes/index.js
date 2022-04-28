import express from 'express';
  import AccountsController from '../controllers';

const createRouter = (dependencies) => {       
    const router = express.Router(); 
    const accountsController = AccountsController(dependencies);    
    // router.route('/').post(accountsController.createAccount);
    //  console.log("vibin");  
    //  console.log(dependencies);  

    router.post('/', accountsController.createAccount); 

    router.route('/').get(accountsController.listAccounts);

    router.route('/:id').get(accountsController.getAccount);

    router.route('/:id').post(accountsController.getAccount); 

    router.route('/email/:id').get(accountsController.findByEmail);  

    router.route('/security/token').post(accountsController.authenticateAccount);  

    router.route('/:id/favourites').post(accountsController.addFavourite); 

    router.route('/:id/favourites').get(accountsController.getFavourites);
 
    return router; 
};
export default createRouter;