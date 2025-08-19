import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppService } from './app.service'
import { UserModule } from './../user/user.module'
import { AuthModule } from './../auth/auth.module'
import { CategoryModule } from './../category/category.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    UserModule,
    AuthModule,
    CategoryModule,
  ],
  providers: [AppService],
})
export class AppModule {}
