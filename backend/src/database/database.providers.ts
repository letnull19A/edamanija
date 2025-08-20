import { DataSource } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const {
        PG_HOST,
        PG_USER,
        PG_DATABASE,
        PG_PORT,
        PG_PASSWORD,
      } = process.env

      const dataSource = new DataSource({
        type: 'postgres',
        host: PG_HOST,
        port: PG_PORT,
        username: PG_USER,
        password: PG_PASSWORD,
        database: PG_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      })

      return dataSource.initialize()
    },
  },
]
