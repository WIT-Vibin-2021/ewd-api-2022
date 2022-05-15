import express from 'express';
  import MoviesController from '../controllers';
  import AccountsController from '../../accounts/controllers';

  const createMoviesRouter = (dependencies) => {

    console.log("Movies Routes");
      const router = express.Router();
      // load controllers with dependencies
      const moviesController = MoviesController(dependencies);
      const accountsController = AccountsController(dependencies);

       router.route('/*')
        .all();//accountsController.verifyToken); //ADD THIS: require token for all routes

      router.route('/:id')
        .get(moviesController.getMovie);

      router.route('/')
        .get(moviesController.find);
      
      router.route('/upcoming/')
        .get(moviesController.findUpComingMovies);

      router.route('/:id/poster')
        .get(moviesController.findMoviesPoster);

      return router;
  };
  export default createMoviesRouter;