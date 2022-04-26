import express from 'express';
import MoviesController from '../controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);

    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/')
        .get(moviesController.find);

    return router;
};
export default createMoviesRouter;