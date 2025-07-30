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

const formsData = JSON.parse(
  readFileSync([__dirname, 'data', 'forms.json'].join('/'), 'utf-8'),
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
    it('all failed validation', async () => {
      try {
        await service.registration(form.form)
      } catch (e) {
        expect(JSON.parse(e.message)).toMatchObject(form.errors)
      }
    })
  })

  describe.each(formsData)('findByLogin', (form) => {
    it('logins not exists', async () => {
      expect(await service.findByLogin(form)).toBeNull()
    })
  })

  describe.each(formsData)('added 3 records', (form) => {
    it('all fields valid', async () => {
      expect(service.registration(form)).resolves.not.toThrow()
    })
  })

  describe.each(formsData)(
    'fail to add 3 records login or email or phone re-used',
    (form) => {
      it('all fields valid, but datas is used', async () => {
        expect(service.registration(form)).rejects.toThrow()
      })
    },
  )

  describe.each(formsData)('passwords', (form) => {
    it('password is not equal password hash', async () => {
      expect((await service.findByLogin(form)).password).not.toEqual(
        form.password,
      )
    })
  })
})
