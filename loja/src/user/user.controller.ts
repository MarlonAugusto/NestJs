import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('api')
export class UserController {
  constructor(private readonly usrService: UserService) {}
  @Post('users')
  async createUser(@Body() userInfo) {
    return userInfo;
  }

  @Get()
  getHello(): string {
    return this.usrService.getHello();
  }
}
