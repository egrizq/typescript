import express from "express"
import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/auth";
import { AdminController } from "../controllers/admin";

export const router = express.Router();
router.use(AuthMiddleware);

// user & animal section
router.post("/user/register", UserController.register);
router.post("/user/register/animal", UserController.registerNewAnimal);
router.post("/user/register/grooming", UserController.registerGrooming);

// grooming section
router.get("/grooming/data", AdminController.groomingData);