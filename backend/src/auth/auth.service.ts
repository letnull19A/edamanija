import { Injectable, Logger } from '@nestjs/common'
import { 
  LoginByDefaultDto, 
  LoginByDefaultSchema 
} from './dto/auth-default.dto'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger()

  constructor() {}

  public async generateJwtPair(): 
Promise<object> {

    const payload = {
      id: 0,
      name: 'Alex',
      surname: 'Wolkow',
      nickname: 'letnull19a',
      email: 'letnul19a@gmail.com'
    }

    const accessToken = await jwt
      .sign(
        payload, 
        'top secret', 
        { 
          algorithm: 'HS256', 
          expiresIn: 60 * 2 
        })

    return {
      access: accessToken
    }
  }
}
