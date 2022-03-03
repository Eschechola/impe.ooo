import Knex from "knex";

const databaseContext = Knex({
    client: 'mysql',
    connection: {
        host : 'localhost',
        port: 3306,
        user : 'root',
        password : '',
        database : 'Impeio'
    }
});

export default databaseContext;