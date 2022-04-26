import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './src/movies';
import createAccountsRouter from './src/accounts/routes';
import dependencies from "./src/config/dependencies";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
const dependencies = buildDependencies();
app.use('/api/accounts', createAccountsRouter(dependencies));