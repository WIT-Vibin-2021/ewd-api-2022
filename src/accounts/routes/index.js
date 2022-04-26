import express from 'express';
  import AccountsController from '../controllers';

  const createRouter = (dependencies) => {
      const router = express.Router();
      // load controller with dependencies
      const accountsController = AccountsController(dependencies);
      router.route('/')
          .post(accountsController.createAccount);

          router.route('/')
          .get(accountsController.listAccounts);

      router.route('/:id')
          .get(accountsController.getAccount);

      router.route('/:id')
          .post(accountsController.getAccount);

      return router;
  };
  export default createRouter;