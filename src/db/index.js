import {Sequelize} from 'sequelize'
import dbOptions from '../config/db'
import User from './models/user'

const db = new Sequelize(dbOptions);

User.init(db)


export default db