/**
 * @todo: Update `.env.sample` file whenever `EnvVars` are updated.
 */
type EnvVars = Partial<{
  DISABLE_AUTH: string;
  ACTIVE_DIRECTORY_OBJECT_ID: string;
  NODE_ENV: string;
  VENDOR: string;
  PORT: string;
  KEY_1: string;
  KEY_2: string;
  IV_1: string;
  IV_2: string;
  CLIENT_SECRET: string;
  REDIRECT_URL: string;
}>;

export default class Environment {
  constructor(private readonly config: EnvVars = process.env) {}

  get app() {
    return {
      port: toInt(this.config.PORT, 3000),
      inDev: this.config.NODE_ENV !== "production"
    };
  }

  get auth() {
    const isDisabled = toBoolean(this.config.DISABLE_AUTH);
    const activeDirectoryObjectId = this.config.ACTIVE_DIRECTORY_OBJECT_ID;
    const clientSecret = this.config.CLIENT_SECRET;
    const vendor = this.config.VENDOR;
    const key1 = this.config.KEY_1;
    const key2 = this.config.KEY_2;
    const iv1 = this.config.IV_1;
    const iv2 = this.config.IV_2;
    const redirectUrl = this.config.REDIRECT_URL;
    return {
      isEnabled: !isDisabled,
      isDisabled,
      activeDirectoryObjectId,
      clientSecret,
      vendor,
      key1,
      key2,
      iv1,
      iv2,
      redirectUrl
    };
  }
}

const toInt = (str: any, altVal = 0) => parseInt(str || altVal.toString(), 10);
const toBoolean = (str: any) => (str || "").toLowerCase() === "true";
