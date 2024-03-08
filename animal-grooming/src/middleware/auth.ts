import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../helper/errorInstance";
import { secretKey } from "../helper/config";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['jwt'];
    if (!token) {
        throw new ResponseError(401, "Missing token")
    }

    try {
        jwt.verify(token, secretKey!);
        next();
    } catch (error) {
        throw new ResponseError(400, `Token is invalid`)
    }
}