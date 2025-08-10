import { 
  Inject, 
  Injectable,
  Logger
} from '@nestjs/common'
import { User } from './user.entity'
import { 
  RegistrationSchema, 
  RegistrationUserDto 
} from './dto/registration.dto'
import { Repository } from 'typeorm/repository/Repository'
import { 
  FindByLoginDto, 
  FindByLoginSchema } from './dto/find-login.dto'
import { FindByIdDto } from './dto/find-id.dto'
import { createHash } from 'node:crypto'

@Injectable()
export class UserService {

  private readonly logger: Logger

  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {
    this.logger = new Logger()
  }

  /**
   * @param {FindByLoginDto} data - форма с логином пользователя
   * @description поиск пользователя по логину
   * @returns User | null
   * @async
   */
  public async findByLogin(data: FindByLoginDto): 
Promise<User | null> {

    this.logger.verbose('finding user by login')

    const validData = await FindByLoginSchema.parseAsync(data)

    const result = await this.userRepository.findOneBy({
      login: validData.login,
    })

    this.logger.verbose(result != null 
      ? 'login has been finded' : 'login not found')

    return result
  }

  /**
   * @param {FindByIdDto} data - форма с id пользователя
   * @description поиск пользователя по id
   * @returns User | null
   * @async
   */
  public async findById(data: FindByIdDto): Promise<User | null> {
    try {
      const parsedData = await FindByIdDto.zodSchema.parseAsync(data)

      const result = await this.userRepository.findOneBy({ id: parsedData.id })

      return result
    } catch (e) {
      throw Error(e)
    }
  }

  public async getAll(): Promise<Array<User>> {
    return this.userRepository.query('SELECT * FROM public.user')
  }

  public async registration(data: RegistrationUserDto): 
Promise<User | null> {
    try {
      const validData = await RegistrationSchema.parseAsync(data)
      const loginIsUsed = await this.findByLogin({ 
          login: validData.login 
      })

      if (loginIsUsed !== null)
        throw Error('login or email or phone is used')

      const passwordHash = createHash('sha-256')
        .update(validData.password)
        .digest('base64')

      const result = await this.userRepository.save({
        login: validData.login,
        password: passwordHash,
        email: validData.email,
        gender: validData.gender,
        name: validData.name,
        surname: validData.surname,
        fatherName: validData.fatherName,
        phone: validData.phone,
      })

      return result
    } catch (e) {
      throw Error(e)
    }
  }
}
