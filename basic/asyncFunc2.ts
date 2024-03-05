import { Animal, CreateAnimal } from './asyncFunc1';

class Data {
    
    static async cat(data: CreateAnimal) {
        try {
            const createData = await Animal.create(data);
            console.log(createData)
        } catch (error) {
            console.log(error)
        }
    }

}

const createSnowbell: {data: CreateAnimal} = {
    data: {
        name: "snowbell",
        age: 12
    }
}

Data.cat(createSnowbell.data)