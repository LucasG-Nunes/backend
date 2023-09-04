import { Router } from "express";

import { uploadFile } from "./modules/upload/controllers/create-file.controller";
import { getUsers } from "./modules/upload/controllers/get-users.controller";
import { uploadMiddleware } from "./middlewares/upload.middleware";
const router = Router();

export default router
  .get("/users", getUsers)
  .post("/file", uploadMiddleware.single("file"), uploadFile);
