import supertest from 'supertest';
import { ContactTest, UserTest } from './test-util';
import { logger } from '../src/application/logger';
import { web } from '../src/application/web';
import { log } from 'winston';

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
});

describe('GET /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create()
    });

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it("should be able get contact", async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .get(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.first_name).toBe(contact.first_name);
        expect(response.body.data.last_name).toBe(contact.last_name);
        expect(response.body.data.email).toBe(contact.email);
        expect(response.body.data.phone).toBe(contact.phone);
    });

    it("should reject get contact if not found", async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .get(`/api/contacts/${contact.id + 1}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });
});

describe('PUT /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create()
    });

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it("should be able to update contact", async () => {
        const contact = await ContactTest.get()
        const response = await supertest(web)
            .put(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "rizq",
                last_name: "ramadhan",
                email: "rizq@example.com",
                phone: "08999"
            })

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(contact.id);
        expect(response.body.data.first_name).toBe("rizq");
        expect(response.body.data.last_name).toBe("ramadhan");
        expect(response.body.data.email).toBe("rizq@example.com");
        expect(response.body.data.phone).toBe("08999");
    });

    it("should reject update contact if request is invalid", async () => {
        const contact = await ContactTest.get()
        const response = await supertest(web)
            .put(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "",
                last_name: "",
                email: "rizq",
                phone: "08999"
            })

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });
});

describe('DELETE /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create()
    });

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it("should be able to remove contact", async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .delete(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test")
        
        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data).toBe("ok");
    });


    it("should reject remove contact if contact is not found", async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .delete(`/api/contacts/${contact.id+1}`)
            .set("X-API-TOKEN", "test")
        
        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

})