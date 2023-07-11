export class UserRepository {
  private users = [];

  async createUser(user) {
    this.users.push(user);
  }
}
