import { NextFunction, Request, Response } from "express";
import { BodyAdmin } from "../model/admin";
import { Admin } from "../service/admin";
import jwt from "jsonwebtoken";

export class AdminController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const requestAdmin: BodyAdmin = req.body as BodyAdmin
            const response = await Admin.create(requestAdmin)
            res.status(200).json({
                status: response
            })
        } catch (error) {
            next(error)
        }
    };

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const requestAdmin: BodyAdmin = req.body as BodyAdmin
            const response = await Admin.login(requestAdmin)
            
            const jwtToken = jwt.sign(
                { admin: "admin" },
                "secret-key",
            ) 
            res.cookie('jwt', jwtToken, {httpOnly:true})
            res.send({ message: 'Token generated successfully' });
        } catch (error) {
            next(error)
        }
    };
}