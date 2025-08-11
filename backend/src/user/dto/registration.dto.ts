import { z } from 'zod'
import { createZodDto } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'

export type Gender = 'MALE' | 'FEMALE' | 'NOBODY'

export const RegistrationSchema = extendApi(
  z
    .object({
      login: z
        .string()
        .nonempty('field is empty')
        .min(8, {
          message: 'field length less than 8 latters',
        })
        .max(16, {
          message: 'field shuld be less than 16 latters',
        })
        .refine(
          (data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/),
          {
            message:
              'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
          },
        ),
      name: z
        .string()
        .regex(/^[А-ЯA-ZЁ]/, {
          message:
            'name should be start with upper-case latter',
        })
        .nonempty('field is empty')
        .min(2, {
          message: 'field length less than 2 latters',
        })
        .max(12, {
          message: 'field should be less than 12 latters',
        })
        .refine(
          (data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/),
          {
            message:
              'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
          },
        ),
      surname: z
        .string()
        .regex(/^[А-ЯA-ZЁ]/, {
          message:
            'surname should be start with upper-case latter',
        })
        .nonempty('field is empty')
        .min(1, {
          message: 'field length less than 1 latters',
        })
        .max(12, {
          message: 'field should be less than 12 latters',
        })
        .refine(
          (data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/),
          {
            message:
              'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
          },
        ),
      fatherName: z
        .string()
        .regex(/^[А-ЯA-ZЁ]/, {
          message:
            'fatherName should be start with upper-case latter',
        })
        .min(1, {
          message: 'field length less than 1 latters',
        })
        .max(20, {
          message: 'field should be less than 20 latters',
        })
        .refine(
          (data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/),
          {
            message:
              'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
          },
        ),
      email: z
        .string()
        .nonempty('field is empty')
        .email('it`s field not email')
        .max(32, {
          message: 'field should be less than 32 latters',
        })
        .refine(
          (data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/),
          {
            message:
              'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
          },
        ),
      phone: z.string(),
      gender: z.string().nonempty(),
      password: z
        .string()
        .nonempty('field is empty')
        .min(8, {
          message: 'field length less than 8 latters',
        })
        .max(64, {
          message: 'field should be less than 64 latters',
        }),
      confirmPassword: z
        .string()
        .nonempty('field is empty')
        .min(8, {
          message: 'field length less than 8 latters',
        })
        .max(64, {
          message: 'field should be less than 64 latters',
        }),
    })
    .refine(
      (data) => data.password === data.confirmPassword,
      {
        message:
          'password and confirmPassword are not equals',
        path: ['confirmPassword'],
      },
    ),
  {
    title: 'RegistrationDto',
  },
)

export class RegistrationUserDto extends createZodDto(
  RegistrationSchema,
) {}
