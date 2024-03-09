export type RequestGrooming = {
    owner: string;
    name: string;
    groomingType: string;
    queue?: number
}

export function responseGrooming(data: RequestGrooming) {
    return {
        owner: data.owner,
        name: data.name,
        groomingType: data.groomingType,
        queue: data.queue
    }
}

export type ResponseGrooming = {
    owner: string;
    name: string;
    groomingType: string
    date: Date;
    queue: number;
}

export type finishGrooming = {
    id?: number
    owner: string;
    name: string;
}

export function ResponseFinishedGrooming(data: finishGrooming): finishGrooming {
    return {
        owner: data.owner,
        name: data.name
    }
}