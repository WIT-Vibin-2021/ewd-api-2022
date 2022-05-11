
import dotenv from 'dotenv';
import express from 'express';


import createAccountsRouter from "./src/accounts/routes";
import AccountRepository from './src/accounts/repositories/mongo/AccountRepository';
import AuthenticationService from './src/accounts/security/simple/AuthenticationService';
import Authenticator from './src/accounts/security/bcrypt/index';
import TokenManager from './src/accounts/security/jwt/index';
import moviesRouter from './src/movies';
import createMoviesRouter from './src/movies/routes';
import errorHandler from './src/utils/ErrorHandler';
//import dependencies from './src/config/dependencies'; 
import db from './src/config/db';
import accountSchema from './src/accounts/validators';

const app = express();
dotenv.config(); 
db.init();
const dependencies = {
  AccountRepository : new AccountRepository(), 
  //AuthenticationService : new AuthenticationService(),   // NOT Encryipted compariosn of password  -- Simple -> AuthSerive class
  Authenticator: new Authenticator(),  // Encryipted compariosn of password  -- Bycrypt -> Index class
  TokenManager: new TokenManager(),
  accountValidator: accountSchema
}; 

app.use(errorHandler);   //Error handling from Utils folder

const port = process.env.PORT;

//Application Middleware
app.use(express.json());
app.get('/', (req, res) => { res.end('All Good!')});

 console.log("-------Main Index Page---------");    
// console.log(dependencies);    

app.use('/api/accounts', createAccountsRouter(dependencies));
//app.use('/api/movies', moviesRouter);   // From Local Movies Data
app.use('/api/movies', createMoviesRouter(dependencies));  // From TMDB Db

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
