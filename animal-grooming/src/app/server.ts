import express from 'express';
import { routerUser } from '../route/user';
import { errorMiddleware } from '../middleware/error';
import { routerAdmin } from '../route/admin';
import cookieParse from 'cookie-parser';
import { routerGrooming } from '../route/grooming';

export const app = express();

app.use(express.json());
app.use(cookieParse());

app.use(routerAdmin);
app.use(routerGrooming);
app.use(routerUser); 

app.use(errorMiddleware); // error handling 