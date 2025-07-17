import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { VersioningType } from '@nestjs/common'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  await app.listen(process.env.APP_PORT)
}
bootstrap()
