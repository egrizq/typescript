import { NextFunction, Request, Response } from "express";
import { User } from "../service/user";
import { AddAnimal, RequestUser } from "../model/user";

export class UserController {
    
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: RequestUser = req.body as RequestUser
            const create = await User.create(request)
            res.status(200).json({
                data: create
            })
        } catch (error) {
            next(error)
        }
    }

    static async registerNewAnimal(req: Request, res: Response, next: NextFunction) {
        try {
            const request: AddAnimal = req.body as AddAnimal
            const createNewAnimal = await User.addAnimal(request)
            res.status(200).json({
                data: createNewAnimal
            }) 
        } catch (error) {
            next(error)
        }
    }
}