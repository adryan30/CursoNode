import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/users", UserController.index);
routes.get("/user", UserController.search);
routes.post("/users", UserController.store);

export default routes;
