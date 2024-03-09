import { NextFunction, Request, Response } from "express";
import { Grooming } from '../service/grooming';

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

    static async finishedGrooming(req: Request, res: Response, next: NextFunction) {
        try {
            const { owner, name } = req.params
            console.log(owner, name)
            const response = await Grooming.done(owner, name)
            res.status(200).json({
                data: response
            })
        } catch (error) {
            next(error)
        }
    }
}