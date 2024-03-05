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
    address: string;
}

export function ReturnUser(data: ResponseUser) {
    return data
}