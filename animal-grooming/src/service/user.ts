import { prismaClient } from '../database/connectDB';
import { ResponseError } from '../helper/errorInstance';
import { AddAnimal, RequestUser, ResponseUser, returnAnimal, returnUser } from '../model/user';
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

    static async addAnimal(user: AddAnimal): Promise<AddAnimal> {
        const validate = Validator.request(UserValidate.ADD_ANIMAL, user)

        const checkOwner = await prismaClient.user.findFirst({
            where: {
                owner: validate.owner
            }
        })
        if (!checkOwner) {
            throw new ResponseError(400, "Owner is not found");
        }

        await prismaClient.animal.create({
            data: {
                name: validate.name,
                age: validate.age,
                color: validate.color,
                kind: validate.kind,
                user_id: checkOwner.user_id
            } 
        })

        return returnAnimal(validate)
    }

    static async data(): Promise<RequestUser[]> {
        const allData = await prismaClient.user.findMany({
            include: {
                animals: {
                    select: {
                        name: true,
                        age: true,
                        color: true, 
                        kind: true
                    }
                }
            }
        })
        if (!allData) {
            throw new ResponseError(404, "there's no data in record")
        }

        return allData
    }

}