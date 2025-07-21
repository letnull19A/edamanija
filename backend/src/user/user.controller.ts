import { Controller } from '@nestjs/common'
import { Get, Version } from '@nestjs/common/decorators'

@Controller('user')
export class UserController {
  @Version('1')
  @Get('')
  public async getAllV1(): Promise<Array<any>> {
    return []
  }
}
