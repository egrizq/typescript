import express from 'express';
import { routerUserAndGrooming } from '../route/service';
import { catchError } from '../middleware/error';
import { routerAdmin } from '../route/admin';
import cookieParse from 'cookie-parser';

export const app = express();

app.use(express.json());
app.use(cookieParse());

app.use(routerAdmin);
app.use(routerUserAndGrooming); 

app.use(catchError);