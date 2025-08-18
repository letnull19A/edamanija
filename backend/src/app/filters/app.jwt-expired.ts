import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { TokenExpiredError } from 'jsonwebtoken'

@Catch(TokenExpiredError)
export class JWTExpiredExceptionFilter
  implements ExceptionFilter
{
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger(JWTExpiredExceptionFilter.name)
  }

  catch(exception: TokenExpiredError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    this.logger.error('jwt is expire, need re-login')

    response.status(401).json({
      statusCode: 401,
      timestamp: new Date().toISOString(),
      path: request.url,
      errors: 'your session is expired, re-login please',
    })
  }
}
