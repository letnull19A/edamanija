import { RegistrationUserDto } from './registration.dto'

export type UserEditDto = Partial<
  Omit<
    RegistrationUserDto,
    'confirmPassword' | 'id'
  >
>
