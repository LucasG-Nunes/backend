import morgan, { StreamOptions } from "morgan";
import Logger from "../config/winston/logger";

const stream: StreamOptions = {
  write: (message) => Logger.info(message),
};

export const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream }
);
