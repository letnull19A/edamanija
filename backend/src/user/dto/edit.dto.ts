import { RegistrationUser } from './registration.dto'

export type UserEdit = Partial<Omit<RegistrationUser, 'confirmPassword'>>
