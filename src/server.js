import express from "express";
import routes from "./routes";
import db from "./db";

const app = express();
db.authenticate();

app.use(express.json());
app.use(routes);

app.listen(3333);
