// import AccountsRepositoryInMemory from '../accounts/repositories/in-memory/AccountsRepository';
import AccountsRepositoryMongo from '../accounts/repositories/mongo/AccountRepository';

  const buildDependencies = () => {
    const dependencies = {
    };

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