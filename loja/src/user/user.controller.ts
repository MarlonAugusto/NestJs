import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { uuid } from 'uuidv4';
import { UserListDTO } from './dto/UserList.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';
@Controller('api')
export class UserController {
  constructor(
    private readonly usrService: UserService,
    private usrRepository: UserRepository,
  ) {}

  @Get()
  getHello(): string {
    return this.usrService.getHello();
  }

  @Post('users')
  async createUser(@Body() userInfo: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.name = userInfo.name;
    userEntity.email = userInfo.email;
    userEntity.password = userInfo.password;
    userEntity.id = uuid();
    this.usrRepository.createUser(userEntity);
    return {
      user: new UserListDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso.',
    };
  }

  @Get('users')
  async getUserList() {
    const savedUsers = await this.usrRepository.userList();
    const listUsers = savedUsers.map(
      (user) => new UserListDTO(user.id, user.name),
    );
    return listUsers;
  }

  @Put('users/:id')
  async updateUser(@Param('id') id: string, @Body() newInfo: UpdateUserDTO) {
    const userUpdated = await this.usrRepository.update(id, newInfo);

    return {
      users: userUpdated,
      message: 'Dados do usuário atualizado',
    };
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    const userDeleted = await this.usrRepository.delete(id);

    return {
      user: userDeleted,
      message: 'O usuário informado foi deletado',
    };
  }
}
