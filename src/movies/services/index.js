import axios from 'axios';

export default {
    getMovie: async (movieId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    find: async (query) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
          );
          return response.data;
    },
    findUpComingMovies: async (query) => {
      const response = await axios.get(          
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        );
        return response.data;
    },
    findMoviesPoster: async (movieId) => {
      const response = await axios.get(                    
          `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
    },
    findpopularTvShows: async (pageNo) => {
      const response = await axios.get(                    
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${pageNo}`
        );
        return response.data;
    },
    findMovieVideo: async (movieId) => {
      const response = await axios.get(
          `http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_KEY}`                    
        );
        return response.data;
    },

  };