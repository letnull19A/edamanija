declare global {
  namespace NodeJS {
    interface ProcessEnv extends PostgresEnv, SecretEnv {
      APP_PORT: number
    }

    interface PostgresEnv {
      PG_PORT: number
      PG_HOST: string
      PG_USER: string
      PG_PASSWORD: string
      PG_DATABASE: string
    }

    interface SecretEnv {
      SECRET_PASSWORD_SALT: stiring
    }
  }
}

export {}
