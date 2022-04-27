
import dotenv from 'dotenv';
import express from 'express';

import createAccountsRouter from "./src/accounts/routes";
import AccountRepository from './src/accounts/repositories/mongo/AccountRepository';
import AuthenticationService from './src/accounts/security/simple/AuthenticationService';

//import dependencies from './src/config/dependencies'; 

import db from './src/config/db';

const app = express();
dotenv.config(); 
db.init();
const dependencies = {
  AccountRepository : new AccountRepository(), 
  AuthenticationService : new AuthenticationService() 
}; 


const port = process.env.PORT;

//Application Middleware
app.use(express.json());
app.get('/', (req, res) => { res.end('All Good!') });

console.log("-------Main Index Page---------");    
console.log(dependencies);    

app.use('/api/accounts', createAccountsRouter(dependencies));
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
