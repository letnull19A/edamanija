import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common'

//TODO: переименовать JWTGuard -> AuthorizationGuard
export class JWTGuard implements CanActivate {
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger(JWTGuard.name)
  }

  canActivate(context: ExecutionContext): boolean {
    const httpContext = context.switchToHttp()
    const request = httpContext.getRequest()
    const headers = request.headers
    const authorizedHeader = headers['authorization']

    if (!!!authorizedHeader) {
      this.logger.verbose('authorize header is not defined')
      throw new UnauthorizedException()
    }

    this.logger.verbose(
      'accepted non empty authorization header',
    )

    if (authorizedHeader.split(' ')[0] !== 'Bearer') {
      this.logger.warn(
        'authorization header contain is not correct records',
      )
      throw new UnauthorizedException(
        'token is no correct format',
      )
    }

    return true
  }
}
