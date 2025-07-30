import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import * as failRegistrationData from './data/failedRegistration.json'
import { DatabaseModule } from './../database/database.module'
import { userProviders } from './user.providers'

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
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
