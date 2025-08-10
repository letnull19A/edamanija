import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from './../user/user.service'
import { UserModule } from './../user/user.module'
import { userProviders } from './../user/user.providers'

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
