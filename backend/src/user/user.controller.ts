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
  @Get()
  public async getAllV1(): Promise<Array<User>> {
    return await this.userService.getAll()
  }

  @Version('2')
  @Get()
  public async getAllV2(): Promise<Array<any>> {
    return (await this.userService.getAll()).map((user) => ({
      name: user.name,
      surname: user.surname,
      fatherName: user.fatherName,
      email: user.email,
      phone: user.phone,
      login: user.login,
    }))
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
