import express from 'express';
import { router } from '../route/user';
import { errorMiddleware } from '../middleware/error';
import { routerAdmin } from '../route/admin';
import cookieParse from 'cookie-parser';

export const app = express();

app.use(express.json());
app.use(cookieParse());

app.use(routerAdmin);
app.use(router); 
app.use(errorMiddleware); // error handling 