import * as dotenv from 'dotenv';
import { ResponseError } from './errorInstance';

dotenv.config({ path: '../.env'  });

export const secretKey = process.env.JWT_SECRET
if (!secretKey) {
    throw new ResponseError(404, "Secret key is missing")
}