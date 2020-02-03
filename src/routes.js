import { Router } from "express";
import UserController from "./controllers/UserController";
import RepoController from "./controllers/RepoController"

const routes = Router();

routes.get("/users", UserController.index);
routes.get("/user", UserController.search);
routes.get("/repos", RepoController.index);

routes.post("/users", UserController.store);

export default routes;
