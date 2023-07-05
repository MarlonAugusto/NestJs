import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';

@Module({
  imports: [UserController],
})
export class AppModule {}
