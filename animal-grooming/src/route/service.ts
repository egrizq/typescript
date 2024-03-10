import express from "express"
import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/auth";
import { GroomingController } from "../controllers/grooming";
import { AdminController } from "../controllers/admin";

export const service = express.Router();
service.use(AuthMiddleware);

// user & animal section
service.post("/user/register", UserController.register);
service.patch("/user/register/animal", UserController.registerNewAnimal);
service.get("/user/data", UserController.userData);

// grooming section
service.post("/user/register/grooming", UserController.registerGrooming);
service.get("/grooming/data/", GroomingController.groomingData);
service.delete("/grooming/finish/:owner/:name", GroomingController.finishedGrooming);

// admin logout
service.delete("/admin/logout", AdminController.logout);