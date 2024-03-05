import { z, ZodType } from "zod";

export class UserValidate {

    static readonly REGISTER: ZodType = z.object({
        owner: z.string().min(1).max(100),
        phone: z.string().min(1).max(100),
        address: z.string().min(1).max(100),
        animals: z.array(
            z.object({
                name: z.string().min(1).max(100),
                age: z.string().min(1).max(10),
                color: z.string().min(1).max(10),
                kind: z.string().min(1).max(100)
            })
        )
    })

}