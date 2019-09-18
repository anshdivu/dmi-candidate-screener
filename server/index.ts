import next from "next";
import expressApp from "./express.app";
import Environment from "./environment";

const env = new Environment();
const nextApp = next({ dev: env.app.inDev });

nextApp.prepare().then(() => {
  const server = expressApp(nextApp.getRequestHandler(), env);

  server.listen(env.app.port, () => {
    console.log(`> Server listening at http://localhost:${env.app.port}`);
  });
});
