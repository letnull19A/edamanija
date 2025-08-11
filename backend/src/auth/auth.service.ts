import {
  Injectable,
  Logger,
} from '@nestjs/common'
import * as jwt from 'jsonwebtoken'

export type TJWTPair = {
  access: string
  refresh: string
}

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger()

  constructor() {}

  public async generateJwtPair(
    data: any,
  ): Promise<TJWTPair> {
    const accessToken = await jwt.sign(
      data,
      'top secret',
      {
        algorithm: 'HS256',
        expiresIn: 60 * 2,
      },
    )

    const refreshToken = await jwt.sign(
      data,
      'refresh top secret',
      {
        algorithm: 'HS512',
        expiresIn: 60 * 5,
      },
    )

    this.logger.verbose(
      'tokens created successfully',
    )

    return {
      access: accessToken,
      refresh: refreshToken,
    }
  }
}
