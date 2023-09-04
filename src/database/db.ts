import sqlite3 from "sqlite3";
import { DBSOURCE } from "../helpers/constants";

export const db = new sqlite3.Database(DBSOURCE);
