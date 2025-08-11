import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppService } from './app.service'
import { UserModule } from './../user/user.module'
import { AuthModule } from './../auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    UserModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
