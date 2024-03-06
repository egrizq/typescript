import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../helper/errorInstance";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies['jwt'];
        console.log(token)

        if (!token) {
            throw new ResponseError(401, "Unauthorized: Missing token")
        }
        const decoded = jwt.verify(token, "secret-key");

        next()
    } catch (error) {
        throw new ResponseError(400, `Unauthorized: ${error}`)
    }
}