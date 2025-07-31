import { createZodDto } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'
import z from 'zod'

export const FindByIdSchema = extendApi(
  z.object({
    id: z
      .string()
      .nonempty('field is empty')
      .uuid('field is not UUID')
      .length(36, { message: 'not correct format UUID' })
      .refine((data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/), {
        message: 'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
      }),
  }),
)

export class FindByIdDto extends createZodDto(FindByIdSchema) {}
