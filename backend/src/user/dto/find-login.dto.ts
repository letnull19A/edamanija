import { createZodDto } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'
import z from 'zod'

export const FindByLoginSchema = extendApi(
  z.object({
    login: z
      .string()
      .nonempty('field is empty')
      .min(8, {
        message:
          'field length less than 8 latters',
      })
      .max(16, {
        message:
          'field shuld be less than 16 latters',
      })
      .refine(
        (data) =>
          !data.match(/[<>\/\\*&^%`\[\]{}()]/),
        {
          message:
            'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
        },
      ),
  }),
)

export class FindByLoginDto extends createZodDto(
  FindByLoginSchema,
) {}
