import { ZodType, z } from "zod";

export class AdminValidate {

    static readonly REGISTER: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    })
}