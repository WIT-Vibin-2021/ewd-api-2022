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

    findByEmail: (email, {accountsRepository})=>{
      return accountsRepository.getByEmail(email);
    },

    authenticate: async (email, password, {AccountRepository, Authenticator}) => {
      
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
      //const token = TokenManager.generate({ email: account.email });
      const token = JSON.stringify({ email: account.email });//JUST Temporary!!! TODO: make it better
      return token;
  }
  }; 