import { ZodType } from "zod";


export class Validator {

    static request<T>(schema: ZodType, data: T): T {
        return schema.parse(data)
    }
}