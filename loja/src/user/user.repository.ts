import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async createUser(user: UserEntity) {
    this.users.push(user);
  }

  async userList() {
    return this.users;
  }

  async MailExistent(email: string) {
    const userMail = this.users.find((user) => user.email === email);
    return userMail !== undefined;
  }

  private findById(id: string) {
    const possibleUser = this.users.find((savedUser) => savedUser.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não encontrado');
    }

    return possibleUser;
  }

  async update(id: string, newInfo: Partial<UserEntity>) {
    const user = this.findById(id);
    Object.entries(newInfo).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async delete(id: string) {
    const user = this.findById(id);
    this.users = this.users.filter((savedUser) => savedUser.id !== id);

    return user;
  }
}
