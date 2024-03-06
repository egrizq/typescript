import express from "express"
import { AdminController } from "../controllers/admin";
import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/auth";
import cookieParse from 'cookie-parser';

export const router = express.Router()
router.use(cookieParse())

// admin section
router.post("/admin/create", AdminController.create);
router.post("/admin/login", AdminController.login); // generate jwt

// user & animal section
router.post("/user/create", AuthMiddleware, UserController.register); // catch jwt