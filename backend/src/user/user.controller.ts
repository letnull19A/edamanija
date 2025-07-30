import {
  Body,
  Put,
  Get,
  Param,
  Post,
  Version,
  Controller,
  BadRequestException,
} from '@nestjs/common'
import { RegistrationUserDto } from './dto/registration.dto'
import { UserEditDto } from './dto/edit.dto'
import { User } from './user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Version('1')
  @Get('')
  public async getAllV1(): Promise<Array<any>> {
    return []
  }

  @Version('1')
  @Get(':id')
  public async getByIdV1(@Param('id') id: string): Promise<any> {
    try {
      const result = await this.userService.findById({ id: id })

      return result
    } catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Post('registration')
  public async regv1(@Body() data: RegistrationUserDto): Promise<void> {
    new Promise<void>((resolve) => setTimeout(() => resolve(), 4000))
    throw new BadRequestException()
  }

  @Put(':id')
  @Version('1')
  public async edit(
    @Param() id: string,
    @Body() data: UserEditDto,
  ): Promise<User | null> {
    return null
  }
}
