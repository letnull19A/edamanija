import { Body, Get, Param, Post, Version, Controller } from '@nestjs/common'
import z, { string } from 'zod'
import { RegistrationUserDto } from './dto/registration.dto'
import { ApiBody } from '@nestjs/swagger'
import { BadRequestException } from '@nestjs/common'

@Controller('user')
export class UserController {
  @Version('1')
  @Get('')
  public async getAllV1(): Promise<Array<any>> {
    return []
  }

  @Version('1')
  @Get(':id')
  public async getByIdV1(@Param('id') id: string): Promise<any> {
    return { id: 'null' }
  }

  @Post('registration')
  public async regv1(@Body() data: RegistrationUserDto): Promise<void> {
    new Promise<void>((resolve) => setTimeout(() => resolve(), 4000))
    throw new BadRequestException()
  }
}
