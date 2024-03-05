import { prismaClient } from '../database/connectDB';
import { ResponseError } from '../middleware/error';
import { RequestUser, ResponseUser, returnUser } from '../model/model';
import { UserValidate } from '../validators/user';
import { Validator } from '../validators/validate';

export class User {

    static async create(user: RequestUser): Promise<ResponseUser> {
        const validate = Validator.request(UserValidate.REGISTER, user)
        
        const checkOwner = await prismaClient.user.findMany({
            where: {
                owner: validate.owner
            }
        })

        if (checkOwner.length !== 0) {
            throw new ResponseError(400, "Owner already exist!")
        }

        const response = await prismaClient.user.create({
            data: {
                owner: validate.owner,
                phone: validate.phone,
                address: validate.address,
                animals: {
                    create: validate.animals.map(animal => ({
                        name: animal.name,
                        age: animal.age,
                        color: animal.color,
                        kind: animal.kind
                    }))
                }
            }, 
            include: {
                animals: true
            }
        })

        return returnUser(response)
    }
}