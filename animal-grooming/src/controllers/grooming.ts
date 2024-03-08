import { NextFunction, Request, Response } from "express";
import { Grooming } from "../service/grooming";

export class GroomingController {
    
    static async groomingData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await Grooming.data();
            res.status(200).json({
                data: data
            })
        } catch (error) {
            next(error)
        }
    }
}