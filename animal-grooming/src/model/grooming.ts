export type Requestgrooming = {
    owner: string;
    name: string;
    groomingType: string;
}

export function responseGrooming(data: Requestgrooming) {
    return {
        owner: data.owner,
        name: data.name,
        groomingType: data.groomingType
    }
}