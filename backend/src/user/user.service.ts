import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { UserEdit } from './dto/edit.dto'
import { RegistrationSchema, RegistrationUser } from './dto/registration.dto'
import z from 'zod'

@Injectable()
export class UserService {
  public async findByLogin(data: { login: string }): Promise<User | null> {
    return null
  }

  public async findByEmail(data: { email: string }): Promise<User | null> {
    return null
  }

  public async findByPhone(data: { phone: string }): Promise<User | null> {
    return null
  }

  public async edit(id: string, data: UserEdit): Promise<User | null> {
    return null
  }

  public async registration(data: RegistrationUser): Promise<object | null> {
    const validData = await RegistrationSchema.parseAsync(data)

    return validData
  }

  public async remove(id: string): Promise<void> {}
}
