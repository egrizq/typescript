export type RequestAnimal = {
    name: string;
    age: string;
    color: string;
    kind: string;
}

export type RequestUser = {
    owner: string;
    phone: string;
    address: string;
    animals: RequestAnimal[];
}

export type ResponseUser = {
    owner: string;
    phone: string; 
}

export function returnUser(data: ResponseUser) {
    return {
        owner: data.owner,
        phone: data.phone
    }
}

export type AddAnimal = {
    owner: string;
    name: string;
    age: string;
    color: string;
    kind: string;
}

export function returnAnimal(data: AddAnimal) {
    return {
        owner: data.owner,
        name: data.name,
        age: data.age,
        color: data.color,
        kind: data.kind
    }
}
