import { prismaClient } from "../database/connectDB";
import { ResponseError } from "../helper/errorInstance";
import { finishGrooming, RequestGrooming, 
    ResponseFinishedGrooming, ResponseGrooming, responseGrooming } from '../model/grooming';
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
            throw new ResponseError(400, "grooming type is not matching!")
        }

        const currentDate = new Date().toLocaleString()
        
        const registerGrooming = await prismaClient.grooming.create({
            data: {
                user_id: checkOwner.user_id,
                owner: validate.owner,
                name: validate.name,
                groomingType: validate.groomingType,
                date: currentDate,
                queue: newQueueNumber,
            }
        })
        validate.queue = registerGrooming.queue

        return responseGrooming(validate)
    }

    static async data(): Promise<ResponseGrooming[]> {
        const dataGrooming = await prismaClient.grooming.findMany({
            select: {
                owner: true,
                name: true,
                groomingType: true,
                date: true,
                queue: true
            }
        })
        if (dataGrooming.length === 0) {
            throw new ResponseError(404, "there's no queue in record")
        }

        return dataGrooming
    }

    static async done(owner: string, name: string): Promise<finishGrooming> {
        const findQueue = await prismaClient.grooming.findFirst({
            where: {
                owner: owner,
                name: name
            }, select: {
                id: true,
                name: true,
                owner: true
            }
        })
        if (!findQueue) {
            throw new ResponseError(404, "owner or name is not found!")
        }

        await prismaClient.grooming.delete({
            where: {
                id: findQueue!.id
            }
        })

        return ResponseFinishedGrooming(findQueue)
    }

}