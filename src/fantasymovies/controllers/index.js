import fantasyMoviesService from "../services";

export default (dependencies) => {

    const createFantasyMovies = async (request, response, next) => {  
        console.log("---- Contoller---Create--");  
        //console.log(dependencies);                   
        const { title, genre, language, release,time,overview } = request.body;        
        const fantasymovies = await fantasyMoviesService.registerFantasyMovies(
            title, genre, language, 
            release, time,overview,dependencies
            );  
          
        response.status(201).json(fantasymovies);
    };
    
    return {
        createFantasyMovies
    };
};