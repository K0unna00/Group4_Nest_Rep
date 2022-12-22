import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blogs/blog.controller';
import { BlogService } from './blogs/blog.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, BlogController, UsersController],
  providers: [AppService, BlogService, UsersService],
})
export class AppModule {}
