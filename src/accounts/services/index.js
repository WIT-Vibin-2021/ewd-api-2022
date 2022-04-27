import Account from '../entities/Accounts';

  export default {
    registerAccount: async  (firstName, lastName, email, password, {AccountRepository}) => {
      console.log("vibin");  
        console.log(AccountRepository);
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
    }
  };