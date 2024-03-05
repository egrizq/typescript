export type CreateAnimal = {
    name: string;
    age: number;
}

export function ReturnData(data: CreateAnimal) {
    return {
        name: data.name,
        age: data.age
    }
}

export class Animal {

    static async create(data: CreateAnimal): Promise<CreateAnimal> {
        return ReturnData(data)
    }
}