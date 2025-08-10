import {
  Controller,
  Post,
  Version,
  Body,
  Logger,
  HttpStatus,
  HttpException,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { 
  LoginByDefaultDto, 
  LoginByDefaultSchema 
} from './dto/auth-default.dto'
import { UserService } from './../user/user.service'
import { ZodError } from 'zod'

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger(AuthController.name)

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post()
  @Version('1')
  public async authByLogin(@Body() data: LoginByDefaultDto): 
Promise<object> {
  this.logger.log('auth request accepted by default strategy')

      const validData = await LoginByDefaultSchema.parseAsync(data)

      const user = await this.userService
        .findByLogin({ login: validData.login })

      if (user == null) {
        this.logger.error('user not found')

        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'user not found'
          },
          HttpStatus.NOT_FOUND
        ) 
      }

      this.logger.log('successfully authentication')

      const pairs = this.authService.generateJwtPair()

      return pairs
  }

  @Post()
  @Version('2')
  public async authByEmail(): Promise<object> {
    return {}
  }
}
