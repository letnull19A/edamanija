import type { Algorithm } from 'jsonwebtoken'

declare global {
  namespace NodeJS {
    interface ProcessEnv extends PostgresEnv, SecretEnv, AccessTokenEnv, RefreshTokenEnv{
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
      SECRET_PASSWORD_SALT: string
    }

    interface AccessTokenEnv {
      ACCESS_ALGORITHM: Algotithm
      ACCESS_SECRET: string
      ACCESS_EXPIRES_IN: number
      ACCESS_ISSUER: string
    }

    interface RefreshTokenEnv {
      REFRESH_ALGORITHM: Algorithm
      REFRESH_SECRET: string
      REFRESH_EXPIRES_IN: number
      REFRESH_ISSUER: string
    }
  }
}

export {}
