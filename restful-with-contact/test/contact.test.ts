import supertest from 'supertest';
import { ContactTest, UserTest } from './test-util';
import { logger } from '../src/application/logger';
import { web } from '../src/application/web';

describe('POST /api/contacts', () => {
    beforeEach(async () => {
        await UserTest.create();
    });

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it("should create new contact", async () => {
        const response = await supertest(web)
            .post("/api/contacts")
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "rizq",
                last_name: "ramadhan",
                email: "rizq@gmail.com",
                phone: "089999"
            });
        
        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.first_name).toBe("rizq");
        expect(response.body.data.last_name).toBe("ramadhan");
        expect(response.body.data.email).toBe("rizq@gmail.com");
        expect(response.body.data.phone).toBe("089999");
    });

    it("should reject create new contact if data is invalid", async () => {
        const response = await supertest(web)
            .post("/api/contacts")
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "",
                last_name: "",
                email: "rizq",
                phone: "08999911111111111111111111"
            });
        
        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });
})