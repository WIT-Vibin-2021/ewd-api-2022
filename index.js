import dotenv from 'dotenv';
import express from 'express';
// import createAccountsRouter from './src/accounts/routes';
import dependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use('/api/movies', createMoviesRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
// const dependencies = buildDependencies();
// app.use('/api/accounts', createAccountsRouter(dependencies));