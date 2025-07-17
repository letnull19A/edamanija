import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'

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

  // it('try find no existing user by login', async () => {
  //   const result = await service.findByLogin({ login: 'faviko4567' })

  // })

  // it('find user by login: faviko4567 (exist user)', async () => {
  //   const result = await service.findByLogin({ login: 'faviko4567' })

  //   expect(result.name).toBe('Иван')
  //   expect(result.surname).toBe('Фавиков')
  //   expect(result.fatherName).toBe('Максимович')
  //   expect(result.email).toBe('favikov1996@yandex.ru')
  //   expect(result.phone).toBe('+79058735673')
  //   expect(result.login).toBe('faviko4567')
  // })
})
