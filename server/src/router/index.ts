import { Router } from "express";
import auth from "./auth";
import users from "./users";
import apis from "./externals";

const router = Router();

export default (): Router => {
  auth(router);
  users(router);
  apis(router);
  return router;
};
