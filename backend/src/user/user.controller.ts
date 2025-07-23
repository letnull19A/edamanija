import {
  Body,
  Put,
  Get,
  Param,
  Post,
  Version,
  Controller,
} from '@nestjs/common'
import { RegistrationUserDto } from './dto/registration.dto'
import { BadRequestException } from '@nestjs/common'
import { UserService } from './user.service'
import { EditUserDto } from './dto/edit.dto'

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
      throw new BadRequestException(e.issues)
    }
  }

  @Post('registration')
  public async regv1(@Body() data: RegistrationUserDto): Promise<void> {
    new Promise<void>((resolve) => setTimeout(() => resolve(), 4000))
    throw new BadRequestException()
  }

  @Put(':id')
  @Version('1')
  public async edit(@Param id, @Body data: EditUserDto): Promise<User | null> {
    return null
  }
}
