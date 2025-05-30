import { Sequelize } from "sequelize";
import config from "./config.js";

const database = new Sequelize(config[process.env.NODE_ENV])

try {
    await database.authenticate()

    console.log('Banco de dados inicializado com sucesso!');
} catch (error){
    console.error('Erro ao inicializar o banco de dados', error);
}

export default database