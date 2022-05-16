import fantasyMoviesService from "../services";
import logger from '../../utils/logger';
export default (dependencies) => {

    const createFantasyMovies = async (request, response, next) => {          
        logger.customLogger.info('Controller: Create Fantasy Movies');
        //console.log(dependencies);                   
        const { title, genre, language, release,time,overview } = request.body;        
        const fantasymovies = await fantasyMoviesService.registerFantasyMovies(
            title, genre, language, 
            release, time,overview,dependencies
            );  
          
        response.status(201).json(fantasymovies);
    };
    const getFantasyMovies = async (request, response, next) => {
        logger.customLogger.info('Call : Get Fantasy Movies Controler');        
        const fantasyMoviesId = request.params.id;        
        const fantasyMovies = await fantasyMoviesService.getFantasyMovies(fantasyMoviesId, dependencies);        
        response.status(200).json(fantasyMovies);
    };
    const deleteFantasyMovies = async (request, response, next) => {
        try {
            const id = request.params.id;                        
            logger.customLogger.info('Call : Delete Fantasy Movies Controler');
            const fantasyMovies = await fantasyMoviesService.deleteFantasyMovies(id, dependencies);
            response.status(200).json(fantasyMovies);
        } catch (err) {
            logger.customLogger.error(`Fantasy Movies Delete : Invalid Data ${err.message}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    
    return {
        createFantasyMovies,
        getFantasyMovies,
        deleteFantasyMovies
    };
    
};