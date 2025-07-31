import { Inject, Injectable } from '@nestjs/common'
import { User } from './user.entity'
// import { UserEdit } from './dto/edit.dto'
import { RegistrationSchema, RegistrationUserDto } from './dto/registration.dto'
import { Repository } from 'typeorm/repository/Repository'
import { FindByLoginDto, FindByLoginSchema } from './dto/find-login.dto'
import { FindByIdDto } from './dto/find-id.dto'
import { createHash } from 'node:crypto'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * @param {FindByLoginDto} data - форма с логином пользователя
   * @description поиск пользователя по логину
   * @returns User | null
   * @async
   */
  public async findByLogin(data: FindByLoginDto): Promise<User | null> {
    try {
      const validData = await FindByLoginSchema.parseAsync(data)

      const result = await this.userRepository.findOneBy({
        login: validData.login,
      })

      return result === null ? null : result
    } catch (e) {
      throw Error(e)
    }
  }

  public async findById(data: FindByIdDto): Promise<User | null> {
    try {
      const parsedData = await FindByIdDto.zodSchema.parseAsync(data)

      const result = await this.userRepository.findOneBy(parsedData)

      return result
    } catch (e) {
      throw Error(e)
    }
  }

  public async findByEmail(data: { email: string }): Promise<User | null> {
    return null
  }

  public async findByPhone(data: { phone: string }): Promise<User | null> {
    return null
  }

  // public async edit(id: string, data: UserEdit): Promise<User | null> {
  //   return null
  // }

  public async registration(data: RegistrationUserDto): Promise<object | null> {
    try {
      const validData = await RegistrationSchema.parseAsync(data)
      const loginIsUsed = await this.findByLogin({ login: validData.login })

      if (loginIsUsed !== null) throw Error('login or email or phone is used')

      const passwordHash = createHash('sha-256')

      await this.userRepository.save({
        login: validData.login,
        password: passwordHash.update(validData.password).digest('base64'),
        email: validData.email,
        gender: validData.gender,
        name: validData.name,
        surname: validData.surname,
        fatherName: validData.fatherName,
        phone: validData.phone,
      })

      return validData
    } catch (e) {
      throw Error(e)
    }
  }

  public async remove(id: string): Promise<void> {}
}
