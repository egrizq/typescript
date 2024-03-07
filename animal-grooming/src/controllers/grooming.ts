import { NextFunction, Request, Response } from "express";
import { Admin } from "../service/admin";

export class GroomingController {
    
    static async groomingData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await Admin.grooming();
            res.status(200).json({
                data: data
            })
        } catch (error) {
            next(error)
        }
    }
}