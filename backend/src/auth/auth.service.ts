import {
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { JWTEnvSchema } from './env.schema'

export type TJWTPair = {
  access: string
  refresh: string
}

export type TJWTPayload = {
  id: string
  name: string
  surname: string
  fatherName: string
  email: string
}

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger(AuthService.name)
  }

  onModuleInit() {
    const envs = process.env

    const authEnvs = {
      ACCESS_ALGORITHM: envs.ACCESS_ALGORITHM,
      ACCESS_SECRET: envs.ACCESS_SECRET,
      ACCESS_EXPIRES_IN: envs.ACCESS_EXPIRES_IN,
      ACCESS_ISSUER: envs.ACCESS_ISSUER,
      REFRESH_ALGORITHM: envs.REFRESH_ALGORITHM,
      REFRESH_SECRET: envs.REFRESH_SECRET,
      REFRESH_EXPIRES_IN: envs.REFRESH_EXPIRES_IN,
      REFRESH_ISSUER: envs.REFRESH_ISSUER,
    }
    JWTEnvSchema.parse(authEnvs)
  }

  private async generateAccessToken(
    data: any,
  ): Promise<string> {
    const {
      ACCESS_ALGORITHM,
      ACCESS_SECRET,
      ACCESS_EXPIRES_IN,
      ACCESS_ISSUER,
    } = process.env

    const accessToken = await jwt.sign(
      data,
      ACCESS_SECRET,
      {
        expiresIn: Number.parseInt(
          ACCESS_EXPIRES_IN.toString(),
        ),
        algorithm: ACCESS_ALGORITHM,
        issuer: ACCESS_ISSUER,
      },
    )

    return accessToken
  }

  private async generateRefreshToken(
    data: any,
  ): Promise<string> {
    const {
      REFRESH_ALGORITHM,
      REFRESH_SECRET,
      REFRESH_EXPIRES_IN,
      REFRESH_ISSUER,
    } = process.env

    const refreshToken = await jwt.sign(
      data,
      REFRESH_SECRET,
      {
        expiresIn: Number.parseInt(
          REFRESH_EXPIRES_IN.toString(),
        ),
        algorithm: REFRESH_ALGORITHM,
        issuer: REFRESH_ISSUER,
      },
    )

    return refreshToken
  }

  private async extractData(origin: any): Promise<object> {
    const data = {
      id: origin?.id,
      name: origin?.name,
      surname: origin?.surname,
      fatherName: origin?.fatherName,
      email: origin?.email,
    }

    return data
  }

  public async generateJwtPair(
    data: any,
  ): Promise<TJWTPair> {
    const refreshToken =
      await this.generateRefreshToken(data)
    const accessToken = await this.generateAccessToken(data)

    this.logger.verbose('tokens created successfully')

    return {
      access: accessToken,
      refresh: refreshToken,
    }
  }

  public async refreshJWTPair(
    tokens: TJWTPair,
  ): Promise<TJWTPair> {
    const isVerify = jwt.verify(
      tokens.refresh,
      process.env.REFRESH_SECRET,
    ) as string

    if (!isVerify) {
      this.logger.verbose(
        'failed to refresh tokens, because is refresh expired',
      )
      return null
    }

    const verifyData = JSON.parse(isVerify)
    const userData = await this.extractData(verifyData)
    const accessToken =
      await this.generateAccessToken(userData)
    const refreshToken =
      await this.generateRefreshToken(userData)

    this.logger.verbose('tokens re-created successfully')

    return {
      access: accessToken,
      refresh: refreshToken,
    }
  }
}
