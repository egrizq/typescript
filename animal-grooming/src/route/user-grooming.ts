import express from "express"
import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/auth";
import { GroomingController } from "../controllers/grooming";

export const routerUserAndGrooming = express.Router();
routerUserAndGrooming.use(AuthMiddleware);

// user & animal section
routerUserAndGrooming.post("/user/register", UserController.register);
routerUserAndGrooming.post("/user/register/animal", UserController.registerNewAnimal);
routerUserAndGrooming.post("/user/register/grooming", UserController.registerGrooming);

// grooming section
routerUserAndGrooming.get("/grooming/data/", GroomingController.groomingData);
routerUserAndGrooming.delete("/grooming/finish/:owner/:name", GroomingController.finishedGrooming);