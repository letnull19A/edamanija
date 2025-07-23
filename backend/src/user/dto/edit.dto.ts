import { RegistrationUser } from './registration.dto'

export type UserEditDto = Partial<
  Omit<RegistrationUser, 'confirmPassword' | 'id'>
>
