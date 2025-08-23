import { Test, TestingModule } from '@nestjs/testing'
import { CategoryService } from './../category.service'
import { CommonErrorFormat } from './../../libs/cef'
import { readFileSync } from 'fs'

//FIXME: перенести типы в общую библиотеку
type TFixtureResult = {
  length?: number
  errorMessageCollection: Array<string>
}

type TFixture = {
  description: string
  input: object
  expect: TFixtureResult
}

//FIXME: нужен рефакторинг
/**
* @description - читает json файл и преобразует в тестовые данные
* */
const readFixture = (fileName: string): Array<any> => {
  return JSON.parse(
    readFileSync(
      [__dirname, 'fixtures', fileName + '.json'].join('/'),
      'utf-8',
    ),
  ) as Array<TFixture>
}

/**
 * @description - фабрика для тестов
 * */
const testFixtureFactory = (fileName: string) => {
  const data = readFixture(fileName)

  return describe.each(data)(
    fileName,
    (data) => {
     it(data.description, () => {
      expect(data.expect).toEqual(data.expect) 
     })
    }
  )
}

describe('CategoryService', () => {
  let service: CategoryService

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        providers: [CategoryService],
      }).compile()

    service = module.get<CategoryService>(CategoryService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  testFixtureFactory('fn.getAll')
})
