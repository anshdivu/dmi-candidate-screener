/**
 * @todo: Update `.env.sample` file whenever `EnvVars` are updated.
 */
type EnvVars = Partial<{
  NODE_ENV: string;
  PORT: string;
}>;

export default class Environment {
  constructor(private readonly config: EnvVars = process.env) {}

  get app() {
    return {
      port: parseInt(this.config.PORT || "3000", 10),
      inDev: this.config.NODE_ENV !== "production"
    };
  }

  get auth() {
    return { isEnabled: true };
  }
}
