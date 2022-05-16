import moviesService from "./../services";

  export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const accounts = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(accounts);
    };

    const findUpComingMovies = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const accounts = await moviesService.findUpComingMovies(query, dependencies);
        //output
        response.status(200).json(accounts);
    };
    const findMoviesPoster = async (request, response, next) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const accounts = await moviesService.findMoviesPoster(movieId, dependencies);
        //output
        response.status(200).json(accounts);
    };
    const findpopularTvShows = async (request, response, next) => {        
        const pageno = request.params.pageno;        
        const movies = await moviesService.findpopularTvShows(pageno, dependencies);        
        response.status(200).json(movies);
    };
    const findMovieVideo = async (request, response, next) => {        
        const movieId = request.params.movieid;        
        const movies = await moviesService.findMovieVideo(movieId, dependencies);        
        response.status(200).json(movies);
    };

    return {
        getMovie,
        find,
        findUpComingMovies,
        findMoviesPoster,
        findpopularTvShows,
        findMovieVideo
    };
  };