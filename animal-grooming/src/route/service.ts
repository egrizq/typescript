import express from "express"
import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/auth";
import { GroomingController } from "../controllers/grooming";
import { AdminController } from "../controllers/admin";

export const routerUserAndGrooming = express.Router();
routerUserAndGrooming.use(AuthMiddleware);

// user & animal section
routerUserAndGrooming.post("/user/register", UserController.register);
routerUserAndGrooming.patch("/user/register/animal", UserController.registerNewAnimal);
routerUserAndGrooming.post("/user/register/grooming", UserController.registerGrooming);
routerUserAndGrooming.get("/user/data", UserController.userData);

// grooming section
routerUserAndGrooming.get("/grooming/data/", GroomingController.groomingData);
routerUserAndGrooming.delete("/grooming/finish/:owner/:name", GroomingController.finishedGrooming);

// admin logout
routerUserAndGrooming.delete("/admin/logout", AdminController.logout);