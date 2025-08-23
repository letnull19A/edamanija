import { Test, TestingModule } from '@nestjs/testing'
import { CategoryController } from './../category.controller'
import { categoryProviders } from './../category.providers'
import { DatabaseModule } from './../../database/database.module'

describe('CategoryController', () => {
  let controller: CategoryController

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        imports: [DatabaseModule],
        providers: [...categoryProviders, CategoryService],
      }).compile()

    controller = module.get<CategoryController>(
      CategoryController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
