import { z } from 'zod'
import { createZodDto } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'

export const RegistrationSchema = extendApi(
  z
    .object({
      login: z
        .string()
        .nonempty('field is empty')
        .min(8, { error: 'field length less than 8 latters' })
        .max(16, { error: 'field shuld be less than 16 latters' })
        .refine((data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/), {
          error: 'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
        }),
      name: z
        .string()
        .regex(/^[А-ЯA-ZЁ]/, {
          error: 'name should be start with upper-case latter',
        })
        .nonempty('field is empty')
        .min(1, { error: 'field length less than 1 latters' })
        .max(12, { error: 'field should be less than 12 latters' })
        .refine((data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/), {
          error: 'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
        }),
      surname: z
        .string()
        .regex(/^[А-ЯA-ZЁ]/, {
          error: 'surname should be start with upper-case latter',
        })
        .nonempty('field is empty')
        .min(1, { error: 'field length less than 1 latters' })
        .max(12, { error: 'field should be less than 12 latters' })
        .refine((data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/), {
          error: 'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
        }),
      fatherName: z
        .string()
        .regex(/^[А-ЯA-ZЁ]/, {
          error: 'fatherName should be start with upper-case latter',
        })
        .min(1, { error: 'field length less than 1 latters' })
        .max(20, { error: 'field should be less than 12 latters' })
        .refine((data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/), {
          error: 'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
        }),
      email: z.email('it`s field not email').nonempty('field is empty'),
      phone: z.string(),
      gender: z.enum(['MALE', 'FEMALE', 'NOBODY']),
      password: z
        .string()
        .nonempty('field is empty')
        .min(8, { error: 'field length less than 8 latters' })
        .max(64, { error: 'field should be less than 64 latters' }),
      confirmPassword: z
        .string()
        .nonempty('field is empty')
        .min(8, { error: 'field length less than 8 latters' })
        .max(64, { error: 'field should be less than 64 latters' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      error: 'password and confirmPassword are not equals',
      path: ['confirmPassword'],
    }),
  {
    title: 'RegistrationDto',
  },
)

export class RegistrationUser extends createZodDto(RegistrationSchema) {}
