import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { UserEdit } from './dto/edit.dto'
import { RegistrationUser } from './dto/registration.dto'

@Injectable()
export class UserService {
  public async findByLogin(data: { login: string }): Promise<User | null> {
    return null
  }

  public async findByEmail(data: { email: string }): Promise<User | null> {
    return null
  }

  public async fintByPhone(data: { phone: string }): Promise<User | null> {
    return null
  }

  public async edit(id: string, data: UserEdit): Promise<User | null> {
    return null
  }

  public async registration(data: RegistrationUser): Promise<User | null> {
    return null
  }
}
