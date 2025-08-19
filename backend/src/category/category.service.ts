import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class CategoryService {
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger(CategoryService.name)
  }

  public async getAll(): Promise<Array<object>> {
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
