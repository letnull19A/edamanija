import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { pswd } from 'src/utils/util.pswd'

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('try find no existing user by login', async () => {
    const result = await service.findByLogin({ login: 'faviko4566' })

    expect(result.id).toBeNull()
    expect(result.name).toBeNull()
    expect(result.surname).toBeNull()
    expect(result.fatherName).toBeNull()
    expect(result.gender).toBeNull()
    expect(result.email).toBeNull()
    expect(result.phone).toBeNull()
    expect(result.login).toBeNull()
  })

  it('find user by login: faviko4567 (exist user)', async () => {
    const result = await service.findByLogin({ login: 'faviko4567' })

    expect(result.id).not.toBeNull()
    expect(result.name).toBe('Иван')
    expect(result.surname).toBe('Фавиков')
    expect(result.fatherName).toBe('Максимович')
    expect(result.gender).toBe('MALE')
    expect(result.email).toBe('favikov1996@yandex.ru')
    expect(result.phone).toBe('+79058735673')
    expect(result.login).toBe('faviko4567')
  })

  const registrationMockUserData = {
    login: 'm1kki444',
    name: 'Александр',
    surname: 'Мюллерс',
    email: 'alexander.muller@vk.com',
    phone: '+79884573345',
  }

  it('regist and edit login existing user', async () => {
    const password = pswd(8)

    const registrationResult = await service.registration({
      ...registrationMockUserData,
      gender: 'MALE',
      password: password,
      confirmPassword: password,
    })

    const result = await service.edit(registrationResult.id, {
      login: 'faviko4567',
    })

    expect(result.id).not.toBeNull()
    expect(result.name).toBe('Иван')
    expect(result.surname).toBe('Фавиков')
    expect(result.fatherName).toBe('Максимович')
    expect(result.gender).toBe('MALE')
    expect(result.email).toBe('favikov1996@yandex.ru')
    expect(result.phone).toBe('+79058735673')
    expect(result.login).toBe('faviko4567')
  })

  it('regist and edit email existing user', async () => {
    const findedUser = await service.findByEmail({
      email: registrationMockUserData.email,
    })

    const result = await service.edit(findedUser.id, {
      email: 'fav.ikov1996@yandex.ru',
    })

    expect(result.id).not.toBeNull()
    expect(result.name).toBe('Иван')
    expect(result.surname).toBe('Фавиков')
    expect(result.fatherName).toBe('Максимович')
    expect(result.gender).toBe('MALE')
    expect(result.email).toBe('fav.ikov1996@yandex.ru')
    expect(result.email).not.toBe('favikov1996@yandex.ru')
    expect(result.phone).toBe('+79058735673')
    expect(result.login).toBe('faviko4567')
  })

  it('regist and edit phone existing user', async () => {
    const findedUser = await service.findByEmail({
      email: registrationMockUserData.email,
    })

    const result = await service.edit(findedUser.id, {
      phone: '+79958735673',
    })

    expect(result.id).not.toBeNull()
    expect(result.name).toBe('Иван')
    expect(result.surname).toBe('Фавиков')
    expect(result.fatherName).toBe('Максимович')
    expect(result.gender).toBe('MALE')
    expect(result.email).toBe('fav.ikov1996@yandex.ru')
    expect(result.phone).toBe('+79958735673')
    expect(result.phone).not.toBe('+79058735673')
    expect(result.login).toBe('faviko4567')
  })
})
