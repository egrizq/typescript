import { Request, Response } from "express";
import { User } from "../service/user";
import { RequestUser } from "../model/model";

export class UserController {
    
    static async register(req: Request, res: Response) {
        try {
            const request: RequestUser = req.body as RequestUser
            const create = await User.create(request)
            res.status(200).json({
                data: create
            })
        } catch (error) {
            console.error(error)
        }
    }
}