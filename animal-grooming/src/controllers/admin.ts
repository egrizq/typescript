import { NextFunction, Request, Response } from "express";
import { CreateAdmin, LoginAdmin } from "../model/admin";
import { Admin } from "../service/admin";
import { secretKey } from "../helper/config";
import jwt from "jsonwebtoken";

export class AdminController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const requestAdmin: CreateAdmin = req.body as CreateAdmin
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
            const requestAdmin: LoginAdmin = req.body as LoginAdmin
            const response = await Admin.login(requestAdmin)
            const jwtToken = jwt.sign(
                { admin: "admin" },
                secretKey!,
            ) 
            res.cookie('jwt', jwtToken, {httpOnly:true})
            res.status(200).send({ 
                status: response 
            });
        } catch (error) {
            next(error)
        }
    };

    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            res.clearCookie("jwt");
            res.status(200).send({
                message: "Success logout!"
            })
        } catch (error) {
            next(error)
        }
    }

}