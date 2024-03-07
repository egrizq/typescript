import express from "express";
import { AuthMiddleware } from "../middleware/auth";
import { GroomingController } from "../controllers/grooming";

export const routerGrooming = express.Router();
routerGrooming.use(AuthMiddleware);

// grooming section
routerGrooming.get("/grooming/data", GroomingController.groomingData);