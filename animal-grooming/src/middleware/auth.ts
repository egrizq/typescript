import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../helper/errorInstance";
import { secret } from "../helper/config";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['jwt'];
    if (!token) {
        throw new ResponseError(401, "Missing token")
    }

    try {
        jwt.verify(token, secret!);
        next();
    } catch (error) {
        throw new ResponseError(400, `Token is invalid`)
    }
}