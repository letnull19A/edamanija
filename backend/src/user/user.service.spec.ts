import {
  Test,
  TestingModule,
} from '@nestjs/testing'
import { UserService } from './user.service'
import { DatabaseModule } from './../database/database.module'
import { userProviders } from './user.providers'
import { ConfigModule } from '@nestjs/config'
import { readFileSync } from 'fs'

const readMockData = (
  fileName: string,
): Array<any> => {
  return JSON.parse(
    readFileSync(
      [__dirname, 'data', fileName].join('/'),
      'utf-8',
    ),
  )
}

const failRegistrationData = readMockData(
  'failedRegistration.json',
)
const formsData = readMockData('forms.json')
const findByLoginData = readMockData(
  'findByLogin.json',
)
const findById = readMockData('findById.json')

describe('mock data defined', () => {
  it('should be defined', () => {
    expect(failRegistrationData).toBeDefined()
  })
})

describe('UserService', () => {
  let service: UserService

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
        providers: [
          ...userProviders,
          UserService,
        ],
      }).compile()

    service = module.get<UserService>(UserService)
  })

  describe('initialization user service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined()
    })
  })

  describe.each(findById)('findById', (form) => {
    it(`correct works ${form.input.id.substring(0, 5)}`, async () => {
      expect(
        service.findById({ id: form.input.id }),
      ).resolves.not.toBeNull()
    })
  })

  describe.each(failRegistrationData)(
    'registration',
    (form) => {
      it('all failed validation', async () => {
        try {
          await service.registration(form.form)
        } catch (e) {
          expect(
            JSON.parse(e.message),
          ).toMatchObject(form.errors)
        }
      })
    },
  )

  describe.each(formsData)(
    'sucessfully added 8 records',
    (form) => {
      it('all fields is valid', () => {
        const user = service.registration(form)

        expect(user).resolves.not.toThrow()
      })
    },
  )

  describe.each(formsData)(
    'fail to add 3 records login or email or phone re-used',
    (form) => {
      it('all fields valid, but datas is used', async () => {
        expect(
          service.registration(form),
        ).rejects.toThrow()
      })
    },
  )

  describe.each(formsData)(
    'passwords',
    (form) => {
      it('password is not equal password hash', async () => {
        expect(
          (await service.findByLogin(form))
            .password,
        ).not.toEqual(form.password)
      })
    },
  )

  describe.each(findByLoginData)(
    'findByLogin',
    (form) => {
      it(`correct works ${form.data.login} isExist: ${form.isExist}`, async () => {
        expect(
          (await service.findByLogin(
            form.data,
          )) !== null,
        ).toStrictEqual(form.isExist)
      })
    },
  )
})
