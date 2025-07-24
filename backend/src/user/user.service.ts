import { Inject, Injectable } from '@nestjs/common'
import { User } from './user.entity'
// import { UserEdit } from './dto/edit.dto'
import { RegistrationSchema, RegistrationUserDto } from './dto/registration.dto'
import { Repository } from 'typeorm/repository/Repository'
import { FindByLoginDto } from './dto/find-login.dto'
import { FindByIdDto } from './dto/find-id.dto'

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
    const result = await this.userRepository.findOneBy({
      login: data.login,
    })

    if (result === null) return null

    return result
  }

  public async findById(data: FindByIdDto): Promise<User | null> {
    const parsedData = await FindByIdDto.zodSchema.parseAsync(data)

    const result = await this.userRepository.findOneBy(parsedData)

    if (result === null) return null

    return result
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
    const validData = await RegistrationSchema.parseAsync(data)

    return validData
  }

  public async remove(id: string): Promise<void> {}
}
