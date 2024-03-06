import { NextFunction, Request, Response } from "express";
import { BodyAdmin } from "../model/admin";
import { Admin } from "../service/admin";

export class AdminController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const requestAdmin: BodyAdmin = req.body as BodyAdmin
            const response = await Admin.create(requestAdmin) // this will return string
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
            res.status(200).json({
                status: response
            })
        } catch (error) {
            next(error)
        }
    };
}