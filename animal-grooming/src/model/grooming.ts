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
    date: string;
    queue: number;
}

export function returnResponseGrooming(data: any[][]) {
    const response = data.map(insert => ({
        owner: insert[0],
        name: insert[1],
        groomingType: insert[2],
        date: insert[3],
        queue: insert[4]
    }))

    return response
}