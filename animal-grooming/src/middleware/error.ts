import { NextFunction, Request, Response, json } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../helper/errorInstance";

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
        res.status(400).json({
            error: `validation error ${JSON.stringify(error)}`
        });
    } else if (error instanceof ResponseError) {
        res.status(error.status).json({
            error: error.message
        });
    } else {
        res.status(500).json({
            error: `An unexpected error occurred: ${JSON.stringify(error)}`
        });
    }
}