import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { VersioningType } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Edamanija Rest-API docs')
    .setDescription('Проект Едамания')
    .setVersion('1.0')
    .build()

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, documentFactory)

  if (process.env.APP_PORT === undefined)
    throw new Error('APP_PORT is undefined, please set env variable value!')

  await app.listen(process.env.APP_PORT)
}

const welkomen = () => {
  console.log(
    '\x1b[30m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[30m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[30m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[30m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[31m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[31m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[31m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[31m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[33m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[33m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[33m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
  console.log(
    '\x1b[33m ██████████████████████████████████████████████████████████████████ \x1b[0m',
  )
}
welkomen()
bootstrap()
