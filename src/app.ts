import express from "express";

//Database Connection
import { connectDatabase } from "./database/database.config";

//Logger
import Logger from "./config/winston/logger";
//Routes
import router from "./router";

//Middlewares
import { morganMiddleware } from "./middlewares/morgan.middleware";

const app = express();

//JSON Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use("/api/", router);

const port = 3000;

connectDatabase();

app.listen(port, async () => {
  Logger.info(`Aplicação está funcionando na porta: port`);
});
