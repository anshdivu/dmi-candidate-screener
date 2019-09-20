import Environment from "./environment.config";
import {
  BearerStrategy,
  IBearerStrategyOptionWithRequest
} from "passport-azure-ad";
import passport from "passport";

const authenticator = (authConfig: Environment["auth"]) => {
  var objectId = authConfig.activeDirectoryObjectId;
  if (!objectId) {
    throw new Error("No AD Object Id");
  }
  console.log("starting strategy options.");
  var options: IBearerStrategyOptionWithRequest = {
    identityMetadata:
      "https://login.microsoftonline.com/allegient.onmicrosoft.com/.well-known/openid-configuration",
    clientID: objectId,
    validateIssuer: true,
    passReqToCallback: true,
    loggingLevel: "info"
  };

  console.log("starting strategy.");
  var strategy: BearerStrategy = new BearerStrategy(
    options,
    (req, token, done) => {
      console.log("req: ", req);
      console.log("token: ", token);
      if (!token.oid) {
        done(new Error("Oid is not found!"));
      } else {
        // owner = token.oid;
        done(null, token);
      }
    }
  );

  console.log("starting initialize.");
  passport.initialize();
  console.log("starting use.");
  passport.use(strategy);
  console.log("finished use.");

  console.log("starting authenticate.");
  return passport.authenticate("oauth-bearer");
};
export default authenticator;
