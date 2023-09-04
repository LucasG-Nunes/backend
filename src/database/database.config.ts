import sqlite3, { Database } from "sqlite3";
import Logger from "../config/winston/logger";
import { DBSOURCE } from "../helpers/constants";

const SQL_ITENS_CREATE = `
    CREATE TABLE files (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(80),
        city VARCHAR(50),
        country VARCHAR(50),
        favorite_sport VARCHAR(50)
    )`;

export const connectDatabase = () => {
  const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      Logger.error(err);
    } else {
      Logger.info("Base de dados conectada com sucesso.");
      createTable(database);
    }
  });
};

const createTable = (database: Database) => {
  database.run(SQL_ITENS_CREATE, (err) => {
    if (err) {
      Logger.warn(err);
    } else {
      Logger.info("Tabela itens criada com sucesso.");
    }
  });
};
