import dotenv from 'dotenv';
import express from 'express';
import createMoviesRouter from './src/movies/routes';
import moviesRouter from './src/movies';

import createAccountsRouter from "./src/accounts/routes";
import dependencies from './src/config/dependencies'; 

dotenv.config();
const app = express();

const port = process.env.PORT;

// app.use('/api/movies', moviesRouter);
// app.use('/api/accounts', createAccountsRouter(dependencies));
app.use('/api/movies', createMoviesRouter(dependencies));
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
