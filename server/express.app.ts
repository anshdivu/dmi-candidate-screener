import express from "express";
import Server from "next/dist/next-server/server/next-server";
import authenticator from "./authenticator.middleware";
import Environment from "./environment.config";

const expressApp = (
  nextJsRequestHandler: ReturnType<Server["getRequestHandler"]>,
  env: Environment
) => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  env.auth.isEnabled && app.use(authenticator(env.auth));

  app.get("/*", (req, res) => nextJsRequestHandler(req, res));

  return app;
};

export default expressApp;
