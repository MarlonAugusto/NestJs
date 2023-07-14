import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
@Controller('api')
export class UserController {
  constructor(
    private readonly usrService: UserService,
    private usrRepository: UserRepository,
  ) {}

  @Post('users')
  async createUser(@Body() userInfo: CreateUserDTO) {
    this.usrRepository.createUser(userInfo);
    return userInfo;
  }

  @Get()
  getHello(): string {
    return this.usrService.getHello();
  }

  @Get('users')
  async getUserList() {
    return this.usrRepository.userList();
  }
}
