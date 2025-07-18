import { Gender } from './../user.entity'

export type RegistrationUser = {
  login: string
  name: string
  surname: string
  fatherName?: string
  email: string
  phone: string
  gender: Gender
  password: string
  confirmPassword: string
}
