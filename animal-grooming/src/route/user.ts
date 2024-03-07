import express from "express"
import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/auth";

export const routerUser = express.Router();
routerUser.use(AuthMiddleware);

// user & animal section
routerUser.post("/user/register", UserController.register);
routerUser.post("/user/register/animal", UserController.registerNewAnimal);
routerUser.post("/user/register/grooming", UserController.registerGrooming);
