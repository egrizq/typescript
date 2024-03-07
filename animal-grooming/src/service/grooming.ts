import { prismaClient } from "../database/connectDB";
import { ResponseError } from "../helper/errorInstance";
import { RequestGrooming, responseGrooming } from "../model/grooming";
import { GroomingValidate } from "../validators/grooming";
import { Validator } from '../validators/validate';

export class Grooming {

    static async register(user: RequestGrooming): Promise<RequestGrooming> {
        const validate = Validator.request(GroomingValidate.REQUEST, user)

        const checkOwner = await prismaClient.user.findFirst({
            where: {
                owner: validate.owner
            }
        })
        if (!checkOwner) {
            throw new ResponseError(400, "owner is not found!")
        }

        const checkAnimal = await prismaClient.animal.findFirst({
            where: {
                name: validate.name,
                user_id: checkOwner.user_id
            }
        })
        if (!checkAnimal) {
            throw new ResponseError(400, "animal is not found!")
        }

        const lastGrooming = await prismaClient.grooming.findFirst({
            orderBy: {
                queue: 'desc'
            }
        })

        const lastQueueNumber = lastGrooming ? lastGrooming.queue : 0;
        const newQueueNumber = lastQueueNumber + 1;
        
        if (validate.groomingType !== 'kutu' && validate.groomingType !== 'kombinasi') {
            throw new ResponseError(400, "Grooming type is not matching!")
        }

        const  registerGrooming = await prismaClient.grooming.create({
            data: {
                user_id: checkOwner.user_id,
                owner: validate.owner,
                name: validate.name,
                groomingType: validate.groomingType,
                queue: newQueueNumber,
            }
        })

        return responseGrooming(validate)
    }
}