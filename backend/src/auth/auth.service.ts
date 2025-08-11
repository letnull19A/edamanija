import { Injectable, Logger } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'

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
export class AuthService {
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger(AuthService.name)
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

    if (
      ACCESS_EXPIRES_IN < 1 ||
      ACCESS_EXPIRES_IN === undefined
    )
      throw Error(
        'ACCESS_EXPIRES_IN is undefined or is negative',
      )

    const accessToken = await jwt.sign(
      data,
      ACCESS_SECRET,
      {
        expiresIn: ACCESS_EXPIRES_IN,
        algorithm: ACCESS_ALGORITHM,
        issuer: ACCESS_ISSUER
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

    if (
      REFRESH_EXPIRES_IN < 1 ||
      REFRESH_EXPIRES_IN === undefined
    )
      throw Error(
        'REFRESH_EXPIRES_IN is undefined or is negative',
      )

    const refreshToken = await jwt.sign(
      data,
      REFRESH_SECRET,
      {
        expiresIn: REFRESH_EXPIRES_IN,
        algorithm: REFRESH_ALGORITHM,
        issuer: REFRESH_ISSUER
      },
    )

    return refreshToken
  }

  public async generateJwtPair(
    data: any,
  ): Promise<TJWTPair> {
    const refreshToken = await this.generateRefreshToken(data)
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

    console.log(isVerify)

    if (!isVerify) return null

    const verifyData = JSON.parse(isVerify)

    const data = {
      id: verifyData?.id,
      name: verifyData?.name,
      surname: verifyData?.surname,
      fatherName: verifyData?.fatherName,
      email: verifyData?.email,
    }

    const accessToken = await this.generateAccessToken(data)
    const refreshToken = await this.generateRefreshToken(data)

    this.logger.verbose('tokens re-created successfully')

    return {
      access: accessToken,
      refresh: refreshToken,
    }
  }
}
