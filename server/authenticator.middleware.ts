import { RequestHandler } from "express";
import Environment from "./environment";

const authenticator = (authConfig: Environment["auth"]): RequestHandler => (
  _req,
  res
) => {
  return res.status(403).send({ error: `Not Authenticated - ${authConfig}` });
};
export default authenticator;
