import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async loginByDefault(): Promise<object> {
    return {}
  }
}
