import { User } from "@prisma/client";
import { CreateContactResquest, ContactResponse, toContactResponse } from '../model/contact-model';
import { ContactValidation } from "../validation/contact-validation";
import { Validation } from '../validation/validation';
import { prismaClient } from "../application/database";
import { logger } from "../application/logger";

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
}