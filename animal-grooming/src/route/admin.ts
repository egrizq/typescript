import express from "express"
import { AdminController } from "../controllers/admin";

export const routerAdmin = express.Router()

routerAdmin.post("/admin/create", AdminController.create);
routerAdmin.post("/admin/login", AdminController.login);
routerAdmin.get("/admin/logout", AdminController.logout);