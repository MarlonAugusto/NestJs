import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UniqueMailValidator } from './validation/unique-mail.validator';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UniqueMailValidator],
})
export class UserModule {}
