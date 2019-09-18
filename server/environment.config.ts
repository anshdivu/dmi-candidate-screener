/**
 * @todo: Update `.env.sample` file whenever `EnvVars` are updated.
 */
type EnvVars = Partial<{
  DISABLE_AUTH: string;
  NODE_ENV: string;
  PORT: string;
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

    return { isEnabled: !isDisabled, isDisabled };
  }
}

const toInt = (str: any, altVal = 0) => parseInt(str || altVal.toString(), 10);
const toBoolean = (str: any) => (str || "").toLowerCase() === "true";
