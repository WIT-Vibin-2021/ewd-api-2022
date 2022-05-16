import Account from '../entities/Accounts';
import logger from '../../utils/logger';

  export default { 
    registerAccount: async  (firstName, lastName, email, password, {AccountRepository,Authenticator}) => {
      
      password= await Authenticator.encrypt(password);
      const account = new Account(undefined, firstName, lastName, email, password);
      logger.customLogger.info('Account Service : Register Account');
      return AccountRepository.persist(account);
    },
    
    getAccount: (accountId, {accountsRepository}) => {
      logger.customLogger.info('Account Service : Get Account');
      return accountsRepository.get(accountId);
    },

    find: ({accountsRepository})=>{
      logger.customLogger.info('Account Service : Find Account');
      return accountsRepository.find();
    },

    getByEmail: (email, {AccountRepository})=>{
      logger.customLogger.info('Account Service : Get Account by Email Id');
      //console.log("-------Services GET ACCOUNT ID Class---------");   
      return AccountRepository.getByEmail(email);
    },

    authenticate: async (email, password, {AccountRepository, Authenticator, tokenManager}) => {
      logger.customLogger.info('Account Service : Account Authenticate');
      // console.log("-------Service Class Page---------");    
      // console.log(AccountRepository);  
      // console.log(Authenticator);  
      // console.log(email); 
      // console.log(password); 
      
      const account = await AccountRepository.getByEmail(email);
      const result = await Authenticator.compare(password, account.password);
      if (!result) {
        logger.customLogger.error('Account Service : Bad credentials');
        throw new Error('Bad credentials');
      }
      // console.log(result+" ---- authenticate service");
      const token = tokenManager.generate({ email: account.email });
      //const token = JSON.stringify({ email: account.email });//JUST Temporary!!! TODO: make it better
      return token;
    },

    verifyToken:   async (token,{AccountRepository,  tokenManager}) => {
      // console.log("---- VerifyToken Account Controller 3 ---");
      // console.log(token);
      // console.log( tokenManager);
      logger.customLogger.info('Account Service : Account Verify Token');
      const decoded = await  tokenManager.decode(token);
      // console.log("---- VerifyToken Account Controller 4 ---");
     
      const user = await AccountRepository.getByEmail(decoded.email);
      if (!user) {
        logger.customLogger.error('Account Service : Bad Token');
          throw new Error('Bad token');
      }
      return user.email;
    },

    addFavourite: async (accountId, movieId, { AccountRepository }) => {     
      const account = await AccountRepository.get(accountId);
      // console.log("---- Add Fav Service ---");
      // console.log(movieId);
      logger.customLogger.info('Account Service : Add Favourite Verify Token');
      account.favourites.push(movieId);
      return await AccountRepository.merge(account);

    },
    getFavourites: async (accountId, { AccountRepository }) => {
      //console.log("Service getFavourites"); 
      logger.customLogger.info('Account Service : Get Favourite');
      const account = await AccountRepository.getFavourites(accountId);
      return account.favourites;
    },

    deleteFavourites: async (accountId, movieId, { AccountRepository }) => {
      //console.log("Service getFavourites"); 
      logger.customLogger.info('Account Service : Delete Favourite');
      const account = await AccountRepository.deleteFavourites(accountId, movieId);
      return account.favourites;
    },
    
};  