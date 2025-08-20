import {
  Controller,
  Post,
  Version,
  Body,
  Logger,
  HttpStatus,
  NotFoundException,
  Headers,
  UseGuards,
  Put,
  Param,
  HttpException,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import {
  LoginByDefaultDto,
  LoginByDefaultSchema,
} from './dto/auth-default.dto'
import { UserService } from './../user/user.service'
import { ZodError } from 'zod'
import { ApiBearerAuth } from '@nestjs/swagger'
import { JWTGuard } from './jwt.guard'

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger(
    AuthController.name,
  )

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post()
  @Version('1')
  public async authByLogin(
    @Body() data: LoginByDefaultDto,
  ): Promise<object> {
    this.logger.log(
      'auth request accepted by default strategy',
    )

    const validData =
      await LoginByDefaultSchema.parseAsync(data)

    const user = await this.userService.findByLogin({
      login: validData.login,
    })

    if (user == null) {
      this.logger.warn('user not found')

      throw new NotFoundException('user not found')
    }

    this.logger.log('user identificated')

    const pairs = this.authService.generateJwtPair({
      id: user.id,
      name: user.name,
      surname: user.surname,
      fatherName: user.fatherName,
      email: user.email,
    })

    return pairs
  }

  @Put('refresh/:refreshToken')
  @ApiBearerAuth()
  @UseGuards(new JWTGuard())
  public async refresh(
    @Headers('authorization') authorization,
    @Param('refreshToken') refreshToken: string,
  ): Promise<object> {
    this.logger.log('start refresh-access token pars')

    const accessToken = authorization.split(' ')[1]
    const oldTokens = {
      access: accessToken,
      refresh: refreshToken,
    }

    const newTokens =
      this.authService.refreshJWTPair(oldTokens)

    return newTokens
  }
}
