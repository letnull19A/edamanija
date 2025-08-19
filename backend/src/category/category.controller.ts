import {
  Controller,
  Body,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Version,
  Logger,
  BadRequestException,
} from '@nestjs/common'

@Controller('category')
export class CategoryController {
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger(CategoryController.name)
  }

  @Version('1')
  @Get()
  private async getAllV1(): Promise<Array<object>> {
    return new Promise((resolve) => resolve([]))
  }

  @Version('2')
  @Get()
  private async getAllV2(): Promise<Array<object>> {
    return new Promise((resolve) => resolve([]))
  }

  @Version('1')
  @Put()
  public async editV1(): Promise<object> {
    return new Promise((resolve) => resolve({}))
  }
}
