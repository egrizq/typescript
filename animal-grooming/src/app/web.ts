import express from 'express';
import { router } from '../route/api';
import { errorMiddleware } from '../middleware/error';

export const app = express();
app.use(express.json());
app.use(router);
app.use(errorMiddleware);