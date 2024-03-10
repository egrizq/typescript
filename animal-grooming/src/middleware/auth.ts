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
        jwt.verify(token, secretKey!, (err: any, decoded: any) => {
            if (err) {
                throw new ResponseError(400, `error: ${err}`)
            }
            res.locals.admin = decoded.admin
        });
        next();
    } catch (error) {
        throw new ResponseError(400, `Token is invalid`)
    }
}