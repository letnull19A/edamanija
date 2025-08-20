import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { ZodError } from 'zod'

@Catch(ZodError)
export class ValidationExceptionFilter
  implements ExceptionFilter
{
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger()
  }

  catch(exception: ZodError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    this.logger.error('validation error')

    response.status(400).json({
      statusCode: 400,
      timestamp: new Date().toISOString(),
      path: request.url,
      errors: exception.issues,
    })
  }
}
