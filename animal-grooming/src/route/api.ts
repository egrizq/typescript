import express from "express"
import { UserController } from "../controllers/user"
import { AdminController } from "../controllers/admin"

export const router = express.Router()

// user & animal register
router.post("/user/create", UserController.register);

// admin 
router.post("/admin/create", AdminController.create);
router.post("/admin/login", AdminController.login);