import { Injectable, Logger, Inject } from '@nestjs/common'
import { Repository } from 'typeorm/repository/Repository'
import { Category } from './category.entity'

@Injectable()
export class CategoryService {
  private readonly logger: Logger

  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepository: Repository<Category>,
  ) {
    this.logger = new Logger(CategoryService.name)
  }

  public async getAll(): Promise<Array<object>> {
    this.logger.verbose('getting category list')
    return new Promise((resolve) => resolve([]))
  }

  /***
   * @description - создаёт категорию
   */
  public async create(): Promise<object> {
    return new Promise((resolve) => resolve({}))
  }

  /***
   * @description - удаляет категорию
   */
  public async remove(): Promise<object> {
    return new Promise((resolve) => resolve({}))
  }

  /***
   * @description - редактирует категорию:w
   */
  public async edit(): Promise<object> {
    return new Promise((resolve) => resolve({}))
  }
}
