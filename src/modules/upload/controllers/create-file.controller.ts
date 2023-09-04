import { Request, Response } from "express";
import { db } from "../../../database/db";

import Logger from "../../../config/winston/logger";
import csvtojson from "csvtojson";

export async function uploadFile(req: Request, res: Response) {
  const file = req.file!.path;

  await csvtojson()
    .fromFile(file)
    .then((data) => {
      for (const item of data) {
        const { name, city, country, favorite_sport } = item;

        db.run(
          "INSERT INTO files (name,city, country, favorite_sport) VALUES (?, ?, ?, ?)",
          [name, city, country, favorite_sport],
          (err) => {
            if (err) {
              Logger.error(`Erro ao inserir dados: ${err}`);
            } else {
              Logger.info(`Dados inseridos com sucesso: ${name}`);
            }
          }
        );
      }
    });

  return res.status(200).send(file);
}
