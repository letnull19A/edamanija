import { z } from 'zod'

export const JWTEnvSchema = z.object({
  ACCESS_ALGORITHM: z
    .string()
    .nonempty('ACCESS_ALGORITHM can not be empty'),
  ACCESS_SECRET: z
    .string()
    .nonempty('ACCESS_SECRET can not be empty')
    .min(8, { message: 'ACCESS_SECRET is short' }),
  ACCESS_EXPIRES_IN: z
    .string()
    .nonempty('ACCESS_EXPIRES_IN can not be empty'),
  ACCESS_ISSUER: z
    .string()
    .nonempty('ACCESS_ISSUER can not be empty'),
  REFRESH_ALGORITHM: z
    .string()
    .nonempty('REFRESH_ALGORITHM can not be empty'),
  REFRESH_SECRET: z
    .string()
    .nonempty('REFRESH_SECRET can not be empty'),
  REFRESH_EXPIRES_IN: z
    .string()
    .nonempty('REFRESH_EXPIRES_IN can not be empty'),
  REFRESH_ISSUER: z
    .string()
    .nonempty('REFRESH_ISSUER can not be empty'),
})
