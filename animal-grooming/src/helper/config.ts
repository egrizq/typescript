import * as dotenv from 'dotenv';
import { ResponseError } from './errorInstance';

dotenv.config({ path: '../.env'  });

export const secret = process.env.JWT_SECRET
if (!secret) {
    throw new ResponseError(404, "Secret key is missing")
}