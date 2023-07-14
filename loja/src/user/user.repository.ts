import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async createUser(user) {
    this.users.push(user);
  }

  async userList() {
    return this.users;
  }

  async MailExistent(email: string) {
    const userMail = this.users.find((user) => user.email === email);
    return userMail !== undefined;
  }
}
