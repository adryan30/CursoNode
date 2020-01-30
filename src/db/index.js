import { Sequelize } from "sequelize";
import dbOptions from "../config/db";
import User from "./models/user";

// Conexão do Node
const db = new Sequelize({ ...dbOptions, host: "db" });

User.init(db);

export default db;
