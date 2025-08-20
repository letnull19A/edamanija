import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './../user.controller'
import { userProviders } from './../user.providers'
import { UserService } from './../user.service'
import { DatabaseModule } from './../../database/database.module'
import { ConfigModule } from '@nestjs/config'

describe('UserController', () => {
  let controller: UserController

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
          }),
          DatabaseModule,
        ],
        providers: [...userProviders, UserService],
        controllers: [UserController],
      }).compile()

    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
