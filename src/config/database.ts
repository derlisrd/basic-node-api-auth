import {Sequelize} from "sequelize";
import config from './app'

const sequelize = new Sequelize(`mysql://${config.db_user}:${config.db_pass}@${config.db_host}:${config.db_port}/${config.db_name}`);

export default sequelize;