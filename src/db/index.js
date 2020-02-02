import { Sequelize } from "sequelize";
import dbOptions from "../config/db";
import User from "./models/user";
import Repo from "./models/repo"

// Conexão do Node
const db = new Sequelize({ ...dbOptions, host: "db" });

User.init(db);
Repo.init(db)

User.associate(db.models)
Repo.associate(db.models)


export default db;
