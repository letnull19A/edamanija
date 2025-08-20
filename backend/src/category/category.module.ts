import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'
import { DatabaseModule } from './../database/database.module'
import { categoryProviders } from './category.providers'

@Module({
  imports: [DatabaseModule],
  providers: [...categoryProviders, CategoryService],
  exports: [CategoryService],
  controllers: [CategoryController],

})
export class CategoryModule {}
