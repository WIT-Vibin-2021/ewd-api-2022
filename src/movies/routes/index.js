import express from 'express';
  import MoviesController from '../controllers';
  import AccountsController from '../../accounts/controllers';
  import logger from '../../utils/logger';

  const createMoviesRouter = (dependencies) => {

    logger.customLogger.info('Initializing Movies Route');
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
      
      router.route('/populartvshows/:pageno')
        .get(moviesController.findpopularTvShows);
      
      router.route('/movievideo/:movieid')
        .get(moviesController.findMovieVideo);

      return router;
  };
  export default createMoviesRouter;