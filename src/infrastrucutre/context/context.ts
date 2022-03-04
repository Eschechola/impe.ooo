import * as dotenv from "dotenv";

import { Sequelize } from "sequelize-typescript";

import WordModel from "../models/word.model";

dotenv.config();

const context = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_SERVER as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  logging: false,
  models: [WordModel],
});

export default context;