import { User } from "@prisma/client";
import { CreateContactResquest, ContactResponse, toContactResponse } from '../model/contact-model';
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from '../validation/validation';
import { prismaClient } from "../application/database";
import { logger } from "../application/logger";
import { ResponseError } from "../error/response-error";

export class ContactService {

    static async create(user: User, request: CreateContactResquest): Promise <ContactResponse> {
        const createRequest = Validation.validate(ContactValidation.CREATE, request);

        const record = {
            ...createRequest, 
            ...{username: user.username}
        };

        const contact = await prismaClient.contact.create({
            data: record
        });

        return toContactResponse(contact);
    }

    static async get(user: User, id: number): Promise<ContactResponse> {
        const contact = await prismaClient.contact.findUnique({
            where: {
                id: id,
                username: user.username
            }
        });

        if (!contact) {
            throw new ResponseError(404, "Contact not found");
        }

        return toContactResponse(contact);
    }
}