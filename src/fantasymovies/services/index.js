import FantasyMovies from '../entities/FantasyMovies';

  export default { 
    registerFantasyMovies: async  (title, genre, language,release, time, overview, {fantasyMoviesRepository}) => {
            
      const fantasyMovies = new FantasyMovies(undefined, title,genre,language,release,time, overview);    
      console.log("---- Fantasy Service--");        
      //console.log(fantasyMoviesRepository);        
      return fantasyMoviesRepository.persist(fantasyMovies);
    },

    // addFavourite: async (accountId, movieId, { AccountRepository }) => {     
    //   const account = await AccountRepository.get(accountId);     
    //   account.favourites.push(movieId);
    //   return await AccountRepository.merge(account);

    // },
    // getFavourites: async (accountId, { AccountRepository }) => {
    //   console.log("Service getFavourites"); 
    //   const account = await AccountRepository.getFavourites(accountId);
    //   return account.favourites;
    // },
    
};  