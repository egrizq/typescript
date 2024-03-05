import { prismaClient } from '../database/connectDB';
import { RequestUser, ResponseUser, ReturnUser } from '../model/model';

export class User {

    static async create(user: RequestUser): Promise<ResponseUser> {
        const checkOwner = await prismaClient.user.findMany({
            where: {
                owner: user.owner
            }
        })

        if (checkOwner.length !== 0) {
            throw new Error('Owner already exist!')
        }
        
        const response = await prismaClient.user.create({
            data: {
                owner: user.owner,
                phone: user.phone,
                address: user.address,
                animals: {
                    create: user.animals.map(animal => ({
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

        return ReturnUser(response)
    }
}