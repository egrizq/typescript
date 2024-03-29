import { Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request";
import { CreateContactResquest, UpdateContactResquest } from "../model/contact-model";
import { ContactService } from "../service/contact-service";

export class ContactController {
    
    static async create(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: CreateContactResquest = req.body as CreateContactResquest;
            const response = await ContactService.create(req.user!, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e)
        }
    }

    static async get(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await ContactService.get(req.user!, contactId);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e)
        }
    }

    static async update(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: UpdateContactResquest = req.body as UpdateContactResquest;
            request.id = Number(req.params.contactId);
            const response = await ContactService.update(req.user!, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e)
        }
    }

    static async remove(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId);
            const response = await ContactService.remove(req.user!, contactId);
            res.status(200).json({
                data: "ok"
            });
        } catch (e) {
            next(e)
        }
    }
}