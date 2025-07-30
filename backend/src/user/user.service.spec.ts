import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { DatabaseModule } from './../database/database.module'
import { userProviders } from './user.providers'
import { ConfigModule } from '@nestjs/config'
import { readFileSync } from 'fs'

const failRegistrationData = JSON.parse(
  readFileSync(
    [__dirname, 'data', 'failedRegistration.json'].join('/'),
    'utf-8',
  ),
)

describe('mock data defined', () => {
  it('should be defined', () => {
    expect(failRegistrationData).toBeDefined()
  })
})

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env'],
        }),
        DatabaseModule,
      ],
      providers: [...userProviders, UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  describe('initialization user service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined()
    })
  })

  describe.each(failRegistrationData)('registration', (form) => {
    it('allways field', async () => {
      try {
        await service.registration(form.form)
      } catch (e) {
        expect(JSON.parse(e.message)).toMatchObject(form.errors)
      }
    })
  })
})
