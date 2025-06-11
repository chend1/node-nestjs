import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserInfo(): string {
    return '获取用户信息';
  }
}
