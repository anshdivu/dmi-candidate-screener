import Environment from "./environment.config";
import {
  IOIDCStrategyOptionWithRequest,
  OIDCStrategy
} from "passport-azure-ad";
import passport from "passport";

const authenticator = (authConfig: Environment["auth"]) => {
  var objectId = authConfig.activeDirectoryObjectId;
  if (!objectId) {
    throw new Error("No AD Object Id");
  }
  if (
    !authConfig.key1 ||
    !authConfig.key2 ||
    !authConfig.iv1 ||
    !authConfig.iv2
  ) {
    throw new Error("No configured Keys");
  }
  if (!authConfig.redirectUrl) {
    throw new Error("No configured redirectUrl");
  }
  console.log("starting strategy options.");
  const options: IOIDCStrategyOptionWithRequest = {
    identityMetadata: `https://login.microsoftonline.com/${authConfig.vendor}.onmicrosoft.com/.well-known/openid-configuration`,
    clientID: objectId,
    responseType: "code id_token",
    responseMode: "form_post",
    redirectUrl: authConfig.redirectUrl,
    allowHttpForRedirectUrl: true,
    clientSecret: authConfig.clientSecret,
    validateIssuer: true,
    useCookieInsteadOfSession: true,
    cookieEncryptionKeys: [
      { key: authConfig.key1, iv: authConfig.iv1 },
      { key: authConfig.key2, iv: authConfig.iv2 }
    ],
    passReqToCallback: true,
    scope: ["profile"],
    loggingLevel: "info"
  };

  console.log("starting strategy.");
  var strategy: OIDCStrategy = new OIDCStrategy(
    options,
    (req: any, profile: any, done: any) => {
      console.log(req);
      if (!profile.oid) {
        done(new Error("OID not found."), null);
      }
      done(null, profile);
    }
  );

  console.log("starting initialize.");
  passport.initialize();
  console.log("starting use.");
  passport.use(strategy);
  console.log("finished use.");

  console.log("starting authenticate.");
  return passport.authenticate("azuread-openidconnect");
};
export default authenticator;
