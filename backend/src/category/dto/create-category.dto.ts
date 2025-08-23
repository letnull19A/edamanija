import { z } from 'zod'
import { createZodDto } from '@anatine/zod-nestjs'
import { extendApi } from '@anatine/zod-openapi'

export const CreateCategorySchema = extendApi(
  z.object({
    label: z
      .string()
      .nonempty('field is empty')
      .min(2, {
        message: 'field length less than 2 latters',
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
    description: z
      .string()
      .optional()
      .refine(
        (data) => !data.match(/[<>\/\\*&^%`\[\]{}()]/),
        {
          message:
            'field shouldn`t contain symbols: [<>\/\\*&^%`\[\]{}()]',
        },
      ),
    isChildren: z.boolean(),
    parentId: z.string().uuid().optional(),
  }),
  {
    title: 'CreateCategotyDto',
  },
)

export class CreateCategoryDto extends createZodDto(
  CreateCategorySchema,
) {}
