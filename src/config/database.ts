import {Sequelize} from "sequelize";
import config from './app'

const sequelize = new Sequelize({
    dialect:'mysql',
    host: config.db_host,
    username: config.db_user,
    password: config.db_pass,
    database: config.db_name,
    logging:false
});

export default sequelize;