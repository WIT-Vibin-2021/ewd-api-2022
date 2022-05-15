// import AccountsRepositoryInMemory from '../accounts/repositories/in-memory/AccountsRepository';
import AccountsRepositoryMongo from '../accounts/repositories/mongo/AccountRepository';
import Authenticator from './accounts/security/simple';
import AccountValidators from './../validators/AccountValidators';

  const buildDependencies = () => {
    // const dependencies = {
    //   validators: AccountValidators,
    //   authenticator: new Authenticator()
    // };

    if (process.env.DATABASE_DIALECT === "in-memory") {
      throw new Error('Add inmemory Support');
      // dependencies.accountsRepository = new AccountsRepositoryInMemory();
    } 
    else if (process.env.DATABASE_DIALECT === "mongo") {
      dependencies.accountsRepository = new AccountsRepositoryMongo();
    } 
    else if (process.env.DATABASE_DIALECT === "mysql") {
      throw new Error('Add MySQL support');
    } 
    else {
      throw new Error('Add DB Support to project');
    }
    return dependencies;
  };  

  export default buildDependencies;