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
import { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
  private readonly logger: Logger

  constructor(
    private readonly categoryService: CategoryService,
  ) {
    this.logger = new Logger(CategoryController.name)
  }

  @Version('1')
  @Get()
  private async getAllV1(): Promise<Array<object>> {
    return await this.categoryService.getAll()
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

  @Version('1')
  @Delete()
  public async deleteV1(): Promise<object> {
    return new Promise((resolve) => resolve({}))
  }

  @Version('1')
  @Post()
  public async createV1(): Promise<object> {
    return new Promise((resolve) => resolve({}))
  }
}
