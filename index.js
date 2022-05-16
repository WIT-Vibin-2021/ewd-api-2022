
import dotenv from 'dotenv';
import express from 'express';


import createAccountsRouter from "./src/accounts/routes";
import AccountRepository from './src/accounts/repositories/mongo/AccountRepository';
import FantasyMoviesRepository from './src/fantasymovies/repositories/mongo/FantasyMoviesRepository';
import AuthenticationService from './src/accounts/security/simple/AuthenticationService';
import Authenticator from './src/accounts/security/bcrypt/index';
import TokenManager from './src/accounts/security/jwt/index';
import moviesRouter from './src/movies';
import createMoviesRouter from './src/movies/routes';
import fantasyMoviesRouter from './src/fantasymovies/routes';
import errorHandler from './src/utils/ErrorHandler';
//import dependencies from './src/config/dependencies'; 
import db from './src/config/db';
import accountSchema from './src/accounts/validators';
import fmSchema from './src/fantasymovies/validators';
import logger from './src/utils/logger';
import expressWinston  from 'express-winston';
import winston from'winston';

logger.customLogger.info('Initializing the API app');

const app = express();
//------------ HTTP Request Logger ----- //
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
  ),
}));
//------------ HTTP Request Logger ----- //
dotenv.config(); 
db.init();
const dependencies = {
  AccountRepository : new AccountRepository(), 
  fantasyMoviesRepository : new FantasyMoviesRepository(), 
  //AuthenticationService : new AuthenticationService(),   // NOT Encryipted compariosn of password  -- Simple -> AuthSerive class
  Authenticator: new Authenticator(),  // Encryipted compariosn of password  -- Bycrypt -> Index class
  tokenManager: new TokenManager(),
  accountValidator: accountSchema,
  fantasyMoviesValidator: fmSchema,
}; 

app.use(errorHandler);   //Error handling from Utils folder

const port = process.env.PORT;

//Application Middleware
app.use(express.json());
app.get('/', (req, res) => { res.end('All Good!')});

//console.log("-------Main Index Page---------");    
// console.log(dependencies);    

app.use('/api/accounts', createAccountsRouter(dependencies));
//app.use('/api/movies', moviesRouter);   // From Local Movies Data
app.use('/api/movies', createMoviesRouter(dependencies));  // From TMDB Db

app.use('/api/fantasymovies', fantasyMoviesRouter(dependencies));

app.listen(port, () => {
  //console.info(`Server running at ${port}`);
  //logger.customLogger.log('info',`Server running at ${port}`);
  logger.customLogger.info(`Server running at ${port}`);
  logger.customLogger.http(`${port}`);
});
