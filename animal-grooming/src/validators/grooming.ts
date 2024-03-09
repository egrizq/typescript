import { ZodType, z } from "zod";

export class GroomingValidate {

    static readonly REQUEST: ZodType = z.object({
        owner: z.string().min(1).max(100),
        name: z.string().min(1).max(100),
        groomingType: z.string().min(1).max(100).optional()
    })
}