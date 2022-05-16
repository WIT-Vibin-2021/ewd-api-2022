import FantasyMovies from '../entities/FantasyMovies';
import logger from '../../utils/logger';

  export default { 
    registerFantasyMovies: async  (title, genre, language,release, time, overview, {fantasyMoviesRepository}) => {            
    const fantasyMovies = new FantasyMovies(undefined, title,genre,language,release,time, overview);    
    logger.customLogger.info('Fantasy Service: Register a fantasy movie');
    //console.log(fantasyMoviesRepository);        
    return fantasyMoviesRepository.persist(fantasyMovies);
  },

  getFantasyMovies: (fantasyMoviesId, {fantasyMoviesRepository}) => {
    logger.customLogger.info('Fantasy Service : Get fantasy movie');
    return fantasyMoviesRepository.get(fantasyMoviesId);
  },

  deleteFantasyMovies: async (fantasyMovieId, { fantasyMoviesRepository }) => {    
    logger.customLogger.info('Account Service : Delete Fantasy Movies');
    const antasyMovie = await fantasyMoviesRepository.deleteFantasy( fantasyMovieId);
    return antasyMovie.fantasyMovieId;
  },  
};  