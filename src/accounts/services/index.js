import Account from '../entities/Accounts';

  export default { 
    registerAccount: async  (firstName, lastName, email, password, {AccountRepository,Authenticator}) => {
      
      password= await Authenticator.encrypt(password);
      const account = new Account(undefined, firstName, lastName, email, password);
      // console.log(accountRepository) ;
      return AccountRepository.persist(account);
    },
    
    getAccount: (accountId, {accountsRepository}) => {
      return accountsRepository.get(accountId);
    },

    find: ({accountsRepository})=>{
      return accountsRepository.find();
    },

    getByEmail: (email, {AccountRepository})=>{
      console.log("-------Services GET ACCOUNT ID Class---------");   
      return AccountRepository.getByEmail(email);
    },

    authenticate: async (email, password, {AccountRepository, Authenticator, tokenManager}) => {
      
      console.log("-------Service Class Page---------");    
      console.log(AccountRepository);  
      console.log(Authenticator);  
      console.log(email); 
      console.log(password); 
      
      const account = await AccountRepository.getByEmail(email);
      const result = await Authenticator.compare(password, account.password);
      if (!result) {
        throw new Error('Bad credentials');
      }
      console.log(result+" ---- authenticate service");
      const token = tokenManager.generate({ email: account.email });
      //const token = JSON.stringify({ email: account.email });//JUST Temporary!!! TODO: make it better
      return token;
    },

    verifyToken:   async (token,{AccountRepository,  tokenManager}) => {
      console.log("---- VerifyToken Account Controller 3 ---");
      console.log(token);
      console.log( tokenManager);

      const decoded = await  tokenManager.decode(token);
      console.log("---- VerifyToken Account Controller 4 ---");
     
      const user = await AccountRepository.getByEmail(decoded.email);
      if (!user) {
          throw new Error('Bad token');
      }
      return user.email;
    },

    addFavourite: async (accountId, movieId, { AccountRepository }) => {     
      const account = await AccountRepository.get(accountId);
      console.log("---- Add Fav Service ---");
      console.log(movieId);
      account.favourites.push(movieId);
      return await AccountRepository.merge(account);

    },
    getFavourites: async (accountId, { AccountRepository }) => {
      console.log("Service getFavourites"); 
      const account = await AccountRepository.getFavourites(accountId);
      return account.favourites;
    },

    deleteFavourites: async (accountId, movieId, { AccountRepository }) => {
      console.log("Service getFavourites"); 
      const account = await AccountRepository.deleteFavourites(accountId, movieId);
      return account.favourites;
    },
    
};  