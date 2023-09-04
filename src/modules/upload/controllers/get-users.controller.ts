import { Request, Response } from "express";
import { db } from "../../../database/db";

export function getUsers(req: Request, res: Response) {
  try {
    const query = `
      SELECT * FROM files 
      WHERE name LIKE ? OR city LIKE ? OR country LIKE ? OR favorite_sport LIKE ?
    `;
    const searchValue = `%${req.query.id}%`;

    db.all(
      query,
      [searchValue, searchValue, searchValue, searchValue],
      (err, rows) => {
        if (err) {
          return res.status(500).send(`Erro ao consultar dados: ${err}`);
        } else {
          return res.status(200).send(rows);
        }
      }
    );
  } catch (error) {
    return res.status(500).send(`Erro ao recuperar dados: ${error}`);
  }
}
